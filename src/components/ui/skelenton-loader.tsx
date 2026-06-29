import React from 'react';

export default function Skeleton() {
    return (
        <div className="animate-pulse w-[30%]">
            <section className="items-center gap-10">
                <div className="space-y-2">
                    <div className="h-[2.3vh] w-full rounded bg-gray-200" />
                    <div className="h-[2.3vh] w-5/6 rounded bg-gray-200" />
                    <div className="h-[2.3vh] w-3/4 rounded bg-gray-200" />
                </div>
            </section>
        </div>
    );
}