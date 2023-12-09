import React from 'react'
import Faq from './Faq'
import { faqdata } from './FaqDetails'

export default function Faqinit() {
    return (
        <div>
            {
                faqdata.map(
                    item => <Faq key={item.id} que={item.que} ans={item.ans} />
                )
            }
        </div>
    )
}
