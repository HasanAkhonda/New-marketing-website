'use client';
import { Disclosure } from '@headlessui/react';
import { Plus, X } from 'lucide-react';

const faqs = [
    {
        question: 'Who is going to implement all the required steps under the FSMA Food safety regulation?',
        answer: `When serving as your FSMP agent, we will implement all the steps required to comply with FSMP regulations.`,
    },
    {
        question: 'When serving as your FSMP agent, we will implement all the steps required to comply with FSMP regulations.',
        answer: 'What does FDA expect to see in my documents and my products at the time of entry?',
    },
    {
        question: 'Who is going to implement all the required steps under the FSMA Food safety regulation?',
        answer: `When serving as your FSMP agent, we will implement all the steps required to comply with FSMP regulations.`,
    },
    {
        question: 'When serving as your FSMP agent, we will implement all the steps required to comply with FSMP regulations.',
        answer: 'What does FDA expect to see in my documents and my products at the time of entry?',
    },
    {
        question: 'Who is going to implement all the required steps under the FSMA Food safety regulation?',
        answer: `When serving as your FSMP agent, we will implement all the steps required to comply with FSMP regulations.`,
    },

];

export default function FAQSection() {
    return (
        <section className="w-full border md:border-0 bg-gradient-to-br from-[#EDE3FE99] via-white/60 to-[#EDE3FE99]">
             
            <div className='max-w-5xl md:mx-auto mx-5 my-8 md:my-24' >
               <h2 className="text-[28px] md:text-3xl font-bold text-black-400 text-center px-5 mb-6 md:mb-12">
                    Freequently Ask Questions
                </h2>
               <div className=" p-5 md:mx-auto rounded-2xl  bg-gradient-to-br from-[#EDE3FE99] via-white/60 to-[#EDE3FE99]   md:p-6 shadow-md " >
                <div className="space-y-5 ">
                    {faqs.map((faq, idx) => (
                        <Disclosure key={idx}>
                            {({ open }) => (
                                <div className="border-1 border-gray-200  space-y-[16px] rounded-lg overflow-hidden bg-white transition-all">
                                    <Disclosure.Button className="flex justify-between items-center w-full   text-left text-sm md:text-base font-medium text-gray-900 hover:bg-gray-50 transition">
                                        <span className='m-6 mr-0 text-[16px]  text-black-400 md:text-[20px]'>{faq.question}</span>
                                        <Plus
                                            className={`h-6 min-w-6 m-6 border-2 rounded-4xl transition-transform duration-300
                                     ${open ? 'rotate-45 stroke-white bg-[#4c2f81] text-[#4c2f81]' : 'text-[#4c2f81]'}`}
                                        />

                                    </Disclosure.Button>
                                    {faq.answer && (
                                        <Disclosure.Panel className="px-4 pb-4 pt-2 text-[16px] md:text-[18px] text-gray-600">
                                            {faq.answer}
                                        </Disclosure.Panel>
                                    )}
                                </div>
                            )}
                        </Disclosure>

                    ))}
                </div>
                </div> 
            </div>
        </section>
    );
}
