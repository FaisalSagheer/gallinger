'use client'
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

function BookCard(props) {
    const { title,
        subtitle,
        status,
        amazonUrl, src } = props.data


    const getStatusBadge = (status) => {
        switch (status) {
            case 'published':
                return (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                        Published
                    </span>
                );
            case 'in-process':
                return (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                        In Process
                    </span>
                );
            case 'nearing-completion':
                return (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
                        Nearing Completion
                    </span>
                );
            default:
                return null;
        }
    };
    return (
        <div
            className="bg-white border border-stone-200 rounded-xl p-6 hover:shadow-lg hover:border-amber-300 transition-all group"
        >
            <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 group-hover:bg-amber-100 transition-colors">
                    <Image src={src} width={200} height={200} className="w-40" alt="/" />
                </div>
                <div className="flex-1">
                    {getStatusBadge(status)}
                </div>
            </div>

            <h3 className="text-xl font-semibold text-stone-900 mb-2 leading-snug">
                {title}
            </h3>

            {subtitle && (
                <p className="text-stone-600 text-sm mb-4 italic">{subtitle}</p>
            )}

            {amazonUrl && (
                <a
                    href={amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium text-sm transition-colors group/link"
                >
                    View on Amazon
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
            )}
        </div>
    )
}

export default BookCard
