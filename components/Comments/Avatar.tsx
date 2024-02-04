'use client'

import React, { useEffect, useState } from 'react';
import * as AvatarRadix from '@radix-ui/react-avatar';
import { UserRound } from 'lucide-react'

export function Avatar() {

    const [color, setColor] = useState('')
    console.log(color)

    function getRandomColor() {
        // Gerar valores aleatórios para os componentes de cor (RGB)
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        // Converter os componentes de cor para formato hexadecimal
        let redHex = red.toString(16).padStart(2, '0');
        let greenHex = green.toString(16).padStart(2, '0');
        let blueHex = blue.toString(16).padStart(2, '0');

        // Construir a string no formato "#RRGGBB"
        let hexColor = "#" + redHex + greenHex + blueHex;

        setColor(hexColor)
    }

    useEffect(() => {
        getRandomColor()
    }, [])

    return (
        <div className="flex gap-5">
            <AvatarRadix.Root className="bg-blackA1 inline-flex size-14 select-none items-center justify-center overflow-hidden rounded-xl align-middle">
                <AvatarRadix.Fallback style={{ backgroundColor: color }} className="text-black leading-1 flex size-14 items-center justify-center text-[15px] font-medium">
                    <UserRound color='#fff' width={36} height={36} />
                </AvatarRadix.Fallback>
            </AvatarRadix.Root>
        </div>
    )
}