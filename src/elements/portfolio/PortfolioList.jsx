import React, { Component } from "react";

const PortfolioListContent = [
    {
        image: 'bg_image--34',
        category: 'React/Redux, API, AJAX Rails, Postgresql',
        title: 'Pokeweb',
        link: 'https://pokeweb.netlify.app/'
    },
    {
        image: 'bg_image--20',
        category: 'React, AJAX, API',
        title: 'Motiv8',
        link: 'https://motiv8-app.netlify.app/'
    },
    // {
    //     image: 'image-2',
    //     category: 'Development',
    //     title: 'Getting tickets to the big show'
    // },
    // {
    //     image: 'image-3',
    //     category: 'Development',
    //     title: 'Getting tickets to the big show'
    // },
    // {
    //     image: 'image-4',
    //     category: 'Development',
    //     title: 'Getting tickets to the big show'
    // }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4>{value.title}</h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href={value.link}>Go to project</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;