"use client"

import { useState } from "react"
import AirdropForm from "@/components/AirdropForm"
import { useAccount } from "wagmi"

export default function HomeContent() {
    const [isUnsafeMode, setIsUnsafeMode] = useState(false)
    const { isConnected } = useAccount()

    return (
        <main>
            {!isConnected ? (
                <div className="flex flex-col items-center justify-center space-y-4">
                    <h2 className="text-xl font-medium text-zinc-600">
                        Please connect a wallet...
                    </h2>
                    <img
                        src="/Shuu_GIF-downsized_large.gif"   // put your GIF in public/my-wallet.gif
                        alt="Wallet animation"
                        className="w-150 h-150 object-contain"
                    />
                </div>
            ) : (
                <div className="flex items-center justify-center p-4 md:p-6 xl:p-8">
                    <AirdropForm
                        isUnsafeMode={isUnsafeMode}
                        onModeChange={setIsUnsafeMode}
                    />
                </div>
            )}
        </main>
    )
}
