import Filter from "./Filter";

const AllCAtegories = () => {
    return(<div>
        <h1>What are you going to wear?</h1>
        {['DRESSES', 'TROUSERS', 'BLOUSES', 'SKIRTS', 'ACCESSORIES', 'ALL'].map(category => <Filter category={category}/>)}
        
    </div>)
}

export default AllCAtegories;