import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Technical skills",
        tab2 = "Soft Skills",
        tab3 = "Work Experience",
        tab4 = "Education";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a>Frontend:</a>
                                                   <ul>
                                                       <li>Javascript, React, Redux</li>
                                                   </ul>
                                                </li>
                                                <li>
                                                    <a>Backend:</a>
                                                    <ul>
                                                        <li>
                                                            Rails, Mysql, Sqlite, Postgresql
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a>Other:</a>
                                                    <ul>
                                                        <li>Html, Css, Bootstrap, Material UI, AJAX, OOP, Agile Development, APIs, and more!</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   Collaberative
                                               </li>
                                               <li>
                                                   Adaptable
                                               </li>
                                               <li>
                                                   Communicative
                                               </li>
                                               <li>
                                                   Passionate
                                               </li>
                                               <li>
                                                   Self-motivated
                                               </li>
                                               <li>
                                                    Teamwork
                                                </li>
                                                <li>
                                                    Customer Service
                                                </li>
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a>Loan Processor <span> - American Nationwide Mortgage Company (02/2019-10/2019)</span></a>
                                                   Recorded and solved loan issues per deadlines. Planned out loan process closed files more efficiently. Studied loan terms and practices outside of work. Produced leads using Facebook Ad campaigns.
                                               </li>
                                               <li>
                                                   <a>Operations Manager <span> - Gopuff(startup) (10/2017-11/2018)</span></a>
                                                   Led and influenced 10+ managers to meet quotas before due dates by holding daily meetings. Oversaw 75+ employees and guided them to their goals for that day. Communicated with appropriate channels per required task. Packed and manually routed orders to be delivered. Supported employees when faced with difficult challenges at work and hired and supported new managers.
                                               </li>
                                               
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a>Fullstack Web Development(Rails,React/Redux Stack)<span> - Flatiron School, Chicago, IL</span></a> (03/2020-07/2020)
                                               </li>
                                               <li>
                                                   <a>A.S in Computer Science(Unfinished)<span> - Wilbur Wright College</span></a> (09/2018-09/2019)
                                               </li>
                                               
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;