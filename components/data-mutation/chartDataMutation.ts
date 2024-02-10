import { IcountryWiseChartData, verient } from "@/interfaces/interfaces"


export const chartDataMutation = (key: keyof verient, obj: verient, chartObj: IcountryWiseChartData, chartObjKey: string) => {
    const data = obj[key]
    if (data) {
        chartObj[chartObjKey][key].push(data)
    } else {
        chartObj[chartObjKey][key].push(0)
    }
}