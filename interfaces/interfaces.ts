export interface verient{
    tested?: number,
    confirmed: number,
    recovered?: number,
    deceased?: number,
    vaccinated1?: number,
    vaccinated2?: number
}

export interface TotalNumbers{
    totalConfirmed : number,
    totalRecovered : number,
    totalTested : number,
    totalDied : number,
    totalvaccinated1 : number,
    totalvaccinated2 : number,
    item : {
        header : string,
        data : number
      }
  }

export interface ICountry {
        dates: string[],
        confirmed: number[],
        recovered: number[],
        tested: number[],
        deceased: number[],
        vaccinated1: number[],
        vaccinated2: number[],
}

export interface ICountryTotal {
    totalRecovered : number,
    totalConfirmed : number,
    totalTested : number,
    totalDeceased : number,
    totalvaccinated : number
}

// export interface IcountryWiseChartData {
//     [key : string] : ICountry | null
// }

export type IcountryWiseChartData= Record<string,ICountry>

//=============getGlobalUpdate=============

type DateDetails=Record<string,Record<string,number>>
interface IDates{
    dates: Record<string,DateDetails & {
        total?:verient
    }>
}

export type TgetGlobalUpdate = Record<string,IDates>

export interface Data {
    [key : string] : number
}

export interface ChartData {
    key : number[],
    chartObj : {
        [key : string] : number[]
    }
}

export interface ITotalNumbers {
    [key : string] : {
        totalRecovered : number
        totalTested : number
        totalDeceased : number,
        totalvaccinated : number,
        totalConfirmed : number
    }
}

export interface ISingleDate{
    date : string,
    confirmed: number,
    recovered: number,
    tested: number,
    deceased: number,
    vaccinated1: number,
    vaccinated2: number,

}

export interface IDataTable {
    [key : string] : ISingleDate[]
}