import EventEmitter from "eventemitter3"

export const events = {
    countrySelect:"AN"
}

const eventEmitter = new EventEmitter()

export default eventEmitter