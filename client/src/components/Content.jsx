import Overview from "./content/Overview"
import Regional from "./content/Regional"

function Content({ salesData }) {
    return (
            <div className='content-wrapper'>
                <Overview data={salesData} />
                <Regional data={salesData} />
            </div>
            )
    }

export default Content
