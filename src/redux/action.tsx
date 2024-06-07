import { showPopulationData } from "./reducer";
import store from "./store";
const {dispatch}=store

export function populationfunction(data:object){
dispatch(showPopulationData(data))
}