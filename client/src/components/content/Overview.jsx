function Overview({ data }) {
    let totalSalesAmt = []
    let totalUnitsSold = []
    let totalRegions = []
    let totalManagers = []
    let totalSalesmen = []

    data && data.forEach(dt => {
        totalSalesAmt.push(dt.saleAmt)
        totalUnitsSold.push(dt.units)
        totalRegions.push(dt.region)
        totalManagers.push(dt.manager)
        totalSalesmen.push(dt.salesman)
    })

    const getTotalSales = totalSalesAmt.reduce((prevValue, currValue) => prevValue + currValue, 0) 
    const getUnitsSold = totalUnitsSold.reduce((prevValue, currValue) => prevValue + currValue, 0)
    const getTotalRegions = [...new Set(totalRegions)].length
    const getTotalManagers = [...new Set(totalManagers)].length
    const getTotalSalesmen = [...new Set(totalSalesmen)].length

  return (
    <div>
    <div className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-lg-2">
                    <h1 className="m-0">Overview</h1>
                </div>
            </div>
        </div>
    </div>
    <section className="content">
        <div className="container-fluid">
            <div className="row">
                <OverviewCard data={data} name='Sales Amount' total={getTotalSales} icon='fas fa-dollar-sign' />
                <OverviewCard data={data} name='Units Sold' total={getUnitsSold} icon='ion ion-bag' />
                <OverviewCard data={data} name='Regions' total={getTotalRegions} icon='fas fa-city' />
                <OverviewCard data={data} name='Managers' total={getTotalManagers} icon='fas fa-users' />
                <OverviewCard data={data} name='Salesmen' total={getTotalSalesmen} icon='fas fa-people-carry' />
            </div>
        </div>
    </section>
    </div>
  )
}

export default Overview

function OverviewCard({data, name, total, icon}){
    return(
    <div className="col-lg-2 col-6">
        <div className="small-box bg-info d-flex justify-content-between">
            <div className="inner">
                <h4>{data && total}</h4>
                    <p>{name}</p>
                </div>
                <div className="icon">
                    <i className={icon}></i>                                    
                </div>
        </div>
    </div>
    )
}
