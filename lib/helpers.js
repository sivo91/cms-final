
export async function getTaxiData(){
    let data = await fetch("https://dev-cms-rest-api.pantheonsite.io/wp-json/twentytwentyone-child/v1/data").then(r => r.json())
    return {taxis: data.features.properties[0].taxi_count, updatedAt: data.features.properties[0].timestamp}
}