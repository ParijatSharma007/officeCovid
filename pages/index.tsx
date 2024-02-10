import { Box, Container } from "@mui/material";
import React, { useEffect, useMemo, useState, useTransition } from "react";
import FlexingOverView from "@/components/overview/FlexingOverView";
import { queryClient } from "./_app";
import { getGlobalUpdate } from "@/api/apiCalls/apiCalls";
import { totalNumbers } from "@/components/data-mutation/totalNumbers";
import {
  IDataTable,
  ISingleDate,
  ITotalNumbers,
  IcountryWiseChartData,
  TotalNumbers,
} from "@/interfaces/interfaces";
import { chartDataMutation } from "@/components/data-mutation/chartDataMutation";
const Wrapper = dynamic(() => import("@/components/layout/Wrapper"), {
  ssr: false,
});
import Selecter from "@/components/selecter/Selecter";
import dynamic from "next/dynamic";
import eventEmitter, { events } from "@/services/eventEmitter";
import CommonTable from "@/components/commonTable/CommonTable";
const Graph = dynamic(() => import("@/components/graphs"), { ssr: false });

interface DATA {
  totalNumbers: TotalNumbers;
  countryWiseChartData: IcountryWiseChartData;
  totalNumbesofCountry: ITotalNumbers;
  dataTableCountry: IDataTable;
}

var dummyData: ISingleDate = {
  date: "",
  recovered: 0,
  confirmed: 0,
  tested: 0,
  deceased: 0,
  vaccinated1: 0,
  vaccinated2: 0,
};

export async function getServerSideProps() {
  try {
    var totalConfirmed = 0;
    var totalRecovered = 0;
    var totalDied = 0;
    var totalTested = 0;
    var totalvaccinated1 = 0;
    var totalvaccinated2 = 0;
    var countryWiseChartData: IcountryWiseChartData = {};
    var totalNumbesofCountry: ITotalNumbers = {};
    var dataTableCountry: IDataTable = {};

    const data = await queryClient.fetchQuery({
      queryKey: ["global-updates"],
      queryFn: getGlobalUpdate,
    });
    Object.entries(data).map(([country, dates]) => {
      dataTableCountry[country] = []
      countryWiseChartData[country] = {
        dates: [],
        confirmed: [],
        recovered: [],
        tested: [],
        deceased: [],
        vaccinated1: [],
        vaccinated2: [],
      };
      Object.entries(dates.dates).map(([key, values]) => {
        countryWiseChartData[country].dates.push(key);

        if (values.total) {
          dataTableCountry[country as keyof IDataTable].push({
            ...dummyData,
            date: key,
            ...values.total,
          });
          chartDataMutation(
            "confirmed",
            values.total,
            countryWiseChartData,
            country
          );
          chartDataMutation(
            "recovered",
            values.total,
            countryWiseChartData,
            country
          );
          chartDataMutation(
            "tested",
            values.total,
            countryWiseChartData,
            country
          );
          chartDataMutation(
            "deceased",
            values.total,
            countryWiseChartData,
            country
          );
          chartDataMutation(
            "vaccinated1",
            values.total,
            countryWiseChartData,
            country
          );
          chartDataMutation(
            "vaccinated2",
            values.total,
            countryWiseChartData,
            country
          );
          const {
            tested,
            confirmed,
            died,
            recovered,
            vaccinated1,
            vaccinated2,
          } = totalNumbers(values.total);
          if (!totalNumbesofCountry[country]) {
            totalNumbesofCountry[country] = {
              totalRecovered: 0,
              totalConfirmed: 0,
              totalTested: 0,
              totalDeceased: 0,
              totalvaccinated: 0,
            };
          }
          totalNumbesofCountry[country].totalRecovered += recovered;
          totalNumbesofCountry[country].totalConfirmed += confirmed;
          totalNumbesofCountry[country].totalTested += tested;
          totalNumbesofCountry[country].totalDeceased += died;
          totalNumbesofCountry[country].totalvaccinated +=
            vaccinated1 + vaccinated2;
          totalConfirmed += confirmed;
          totalRecovered += recovered;
          totalDied += died;
          totalTested += tested;
          totalvaccinated1 += vaccinated1;
          totalvaccinated2 += vaccinated2;
        }
      });
    });

    return {
      props: {
        totalNumbers: {
          totalConfirmed,
          totalRecovered,
          totalTested,
          totalDied,
          totalvaccinated1,
          totalvaccinated2,
        },
        countryWiseChartData,
        totalNumbesofCountry,
        dataTableCountry,
        error: false,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        error: true,
      },
    };
  }
}

const Home = ({
  totalNumbers,
  countryWiseChartData,
  totalNumbesofCountry,
  dataTableCountry,
}: DATA) => {

  const [country, setCountry] = useState("AN");

  useEffect(() => {
    const handleSelect = (code: string) => {
      setCountry(code);
    };
    eventEmitter.on(events.countrySelect, handleSelect);
    return () => {
      eventEmitter.off(events.countrySelect, handleSelect);
    };
  }, []);

  const currentCountryData = useMemo(() => {
    return {
      chartData: countryWiseChartData[country],
      countryTotalNumbers: totalNumbesofCountry[country],
      countryDataTable : dataTableCountry[country]
    };
  }, [country]);

  const { chartData, countryTotalNumbers, countryDataTable } = currentCountryData;
  console.log(countryDataTable);
  
  return (
    <Wrapper>
      <Box>
        <FlexingOverView totalNumbers={totalNumbers} />
      </Box>
      <Selecter />
      <br />
      <Box flex={"disply"} flexDirection={"column"}>
        <Graph
          countryTotalNumbers={countryTotalNumbers}
          chartData={chartData}
        />
        <Container>
          <CommonTable
            data={countryDataTable}
            fields={[
              "date",
              "confirmed",
              "tested",
              "recovered",
              "deceased",
              "vaccinated1",
              "vaccinated2",
            ]}
            asId="date"
          />
        </Container>
      </Box>
    </Wrapper>
  );
};

export default Home;
