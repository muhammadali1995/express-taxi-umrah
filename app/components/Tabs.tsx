import React, { useState } from 'react'

export default function Tabs(props: any) {
    const { children } = props
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (e: any, newActiveTab: any) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };

    return (
        <div className="mx-auto bg-white">
            <div className="flex isolate  divide-x divide-white-500">
                {children.map((child: any) => (
                    <button
                        key={child.props.label}
                        className={`${activeTab === child.props.label ? 'bg-white text-gray-900' : 'bg-yellow-500 text-white'
                            } flex-1  font-bold py-4`}
                        onClick={e => handleClick(e, child.props.label)}
                    >
                        {child.props.label}
                    </button>
                ))}
            </div>
            <div className="py-4">
                {children.map((child: any) => {
                    if (child.props.label === activeTab) {
                        return <div key={child.props.label}>{child.props.children}</div>;
                    }
                    return null;
                })}
            </div>
        </div>
    );
};