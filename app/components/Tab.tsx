import React from 'react'

export default function Tab(props: any) {
    const { label, children } = props
    return (
        <div label={label} className="hidden">
            {children}
        </div>
    );
};
