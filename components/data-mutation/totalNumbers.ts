import { verient } from "@/interfaces/interfaces"

interface totalNumbers{
    confirmed : number,
    recovered : number,
    died : number,
    tested : number,
    obj : verient
}

export const totalNumbers = (obj : verient) => {
    let confirmed = 0
    let died = 0
    let recovered = 0
    let tested = 0
    let vaccinated1 = 0
    let vaccinated2 = 0
    if(obj.confirmed !== undefined){
        confirmed += obj.confirmed
    }
    if(obj.deceased !== undefined){
        died += obj.deceased
    }
    if(obj.recovered !== undefined){
        recovered += obj.recovered
    }
    if(obj.tested !== undefined){
        tested += obj.tested
    }
    if(obj.vaccinated1 !== undefined){
        vaccinated1 += obj.vaccinated1
    }
    if(obj.vaccinated2 !== undefined){
        vaccinated2 += obj.vaccinated2
    }

    return {confirmed, tested, died, recovered, vaccinated1, vaccinated2}
}