import React from 'react';

const ColumnContentComponent = ({imageUrl, linkUrl, bodyCopy, htmlCopy, title, title_2, htmlCopy_2, title_3, id, buttonText }) => (
            <div className="col col-md-6 mb-4" key={id}>
                <div className="home-card card h-100">
                    <div className="card-body">
                            <h4 className="card-title font-weight-bold">{title}</h4>
                            <p className="card-text">
                                {htmlCopy &&
                                     < div dangerouslySetInnerHTML={{__html: htmlCopy}} />
                            
                                }
                            </p>
                            <h4 className="card-title-2">{title_2}</h4>
                            <p className="card-text-2">
                                {htmlCopy_2 &&
                                    < div dangerouslySetInnerHTML={{__html: htmlCopy_2}} />
                                }
                            </p>
                            <div className="mini-cta p-3">
                            <p className="card-text-3">
                                {title_3 &&
                                    < div className="mini-cta-content" dangerouslySetInnerHTML={{__html: title_3}} />
                                }
                            </p>
                            </div>
                    </div>
                </div>
            </div>
)

export default ColumnContentComponent;