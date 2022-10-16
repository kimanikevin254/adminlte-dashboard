import React from 'react'

function Regional({ data }) {
    let eastSales = []
    let westSales = []
    let centralSales = []

    data && data.forEach(dt => {
        if(dt.region === "East"){
            eastSales.push(dt)
        }
        else if(dt.region === "West"){
            westSales.push(dt)
        }
        else{
            centralSales.push(dt)
        }
    })

    // Calculating total sales per region
    const totalSales = (arr) => (arr.map(el => el.saleAmt)).reduce((prevValue, currValue) => prevValue + currValue, 0) 

    // Calculating total units sold per region
    const totalUnits = (arr) => (arr.map(el => el.units)).reduce((prevValue, currValue) => prevValue + currValue, 0) 
  return (
    <div>
        <div className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-lg-2">
                    <h1 className="m-0">Regional Sales</h1>
                </div>
            </div>
        </div>
        </div>

        <section className="content">
        <div className="container-fluid">
            <div className="row">
                <RegionalCard data={data} region='East' salesArr={eastSales} totalSales={totalSales} totalUnits={totalUnits}  />
                <RegionalCard data={data} region='West' salesArr={westSales} totalSales={totalSales} totalUnits={totalUnits}  />
                <RegionalCard data={data} region='Central' salesArr={centralSales} totalSales={totalSales} totalUnits={totalUnits}  />
        </div>
        </div>
        </section>
    </div>
  )
}

export default Regional

function RegionalCard({data, region, salesArr, totalSales, totalUnits}){
    return(
        <div className="col-lg-3 col-6">
            <div className="small-box bg-warning d-flex justify-content-between">
                <div className="inner">
                    <h3>{region}</h3>
                    <p>Amount: {data && totalSales(salesArr)}</p>
                    <p>Units: {data && totalUnits(salesArr)}</p>
                </div>
                <div className="icon">
                    <i className="fas fa-city"></i>
                </div>
            </div>
        </div>
    )
}
