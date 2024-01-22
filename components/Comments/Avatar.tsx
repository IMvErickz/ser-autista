'use client'

import React from 'react';
import * as AvatarRadix from '@radix-ui/react-avatar';
import { UserRound } from 'lucide-react'

export function Avatar() {
    return (
        <div className="flex gap-5">
            <AvatarRadix.Root className="bg-blackA1 inline-flex size-14 select-none items-center justify-center overflow-hidden rounded-xl align-middle">
                <AvatarRadix.Fallback className="text-black leading-1 flex size-14 items-center justify-center bg-[#24A959] text-[15px] font-medium">
                    <UserRound color='#fff' width={36} height={36} />
                </AvatarRadix.Fallback>
            </AvatarRadix.Root>
        </div>
    )
}