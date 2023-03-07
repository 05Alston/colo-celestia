import React from 'react'

const Payment = () => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-800 py-5 text-gray-50">
        <div className="px-5">
            <div className="mb-2">
                <h1 className="text-3xl md:text-5xl font-bold">Checkout</h1>
            </div>
        </div>
        <div className="w-full border-t border-b border-gray-600 px-5 py-10">
            <div className="w-full">
                <div className="-mx-3 flex items-start flex-col md:flex-row">
                    <div className="px-3 md:w-7/12 lg:pr-10">
                        <div className="w-full mx-auto font-light border-b border-gray-600">
                            <div className="w-full flex items-center">
                                <h6 className="font-semibold uppercase text-6xl pb-10">Event Name</h6>
                            </div>
                            <div className="artboard max-w-[414px] h-auto mx-auto">
                                <img src="../assets/backdrop.webp"/>
                            </div>
                        </div>
                        <div className="mb-6 pb-6 border-b border-gray-600">
                            <h6 className="font-semibold uppercase text-6xl pb-10">Speakers</h6>
                            <div className="-mx-2 flex items-end justify-start gap-4 flex-wrap">
                                <div className="avatar flex flex-col gap-2">
                                <div className="w-32 rounded-full aspect-square bg-gray-600">
                                </div>
                                <p className="font-semibold text-gray-200">Speaker 1</p>
                                </div>
                                <div className="avatar flex flex-col gap-2">
                                <div className="w-32 rounded-full aspect-square bg-gray-600">
                                </div>
                                <p className="font-semibold text-gray-200">Speaker 2</p>
                                </div>
                                <div className="avatar flex flex-col gap-2">
                                <div className="w-32 rounded-full aspect-square bg-gray-600">
                                </div>
                                <p className="font-semibold text-gray-200">Speaker 3</p>
                                </div>
                                <div className="avatar flex flex-col gap-2">
                                <div className="w-32 rounded-full aspect-square bg-gray-600">
                                </div>
                                <p className="font-semibold text-gray-200">Speaker 4</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 pb-6 border-b border-gray-600">
                            <h6 className="font-semibold uppercase text-6xl pb-10">Description</h6>
                            <div className="-mx-2 flex items-start justify-center gap-4 flex-col">
                                <p className="font-semibold pb-2 text-gray-200">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae autem nulla doloribus quos sunt porro eum quis, ullam culpa amet consequuntur. Provident laudantium quasi dolorem rerum explicabo neque corporis! Consequuntur!</p>
                                <p className="font-semibold pb-6 text-gray-200">Doloribus consequuntur nesciunt officiis. A atque optio aliquid excepturi vitae reiciendis iusto fuga sapiente nulla consequuntur nemo, ut velit fugiat tenetur impedit quam temporibus veritatis voluptatem distinctio odio aspernatur quaerat.</p>
                                <div className='text-lg font-medium pt-3 flex items-end gap-4'><p className="text-3xl font-bold">Venue:</p><p className="text-gray-200">Venue</p></div>
                                <div className='text-lg font-medium pt-3 flex items-end gap-4'><p className="text-3xl font-bold">Date:</p><p className="text-gray-200">Date</p></div>
                                <div className='text-lg font-medium pt-3 flex items-end gap-4'><p className="text-3xl font-bold">Timing:</p><p className="text-gray-200">Time</p></div>
                                <div className='text-lg font-medium pt-3 flex items-end gap-4'><p className="text-3xl font-bold">Entry Fee:</p><p className="text-gray-200">Fee (club members)</p></div>
                                <div className='text-lg font-medium pt-3 flex items-end gap-4'><p className="text-3xl font-bold">Entry Fee:</p><p className="text-gray-200">Fee (rest)</p></div>
                                <div className='text-lg font-medium pt-3 flex items-end gap-4'><p className="text-3xl font-bold">Team:</p><p className="text-gray-200">Yes/ No</p></div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="px-3 w-full md:w-5/12 md:fixed right-0">
                        <div className="w-full mx-auto rounded-lg border border-gray-600 p-3 font-light mb-6">
                            <div className="w-full mb-3 font-semibold">
                                Contact
                            </div>
                            <form id="payment-form" method="POST" action="">
                                <section>
                                    <fieldset className="mb-3 shadow-lg shadow-gray-900 rounded bg-gray-700">
                                        <label className="flex border-b border-gray-600 h-12 py-3 items-center">
                                            <span className="text-right px-2 text-gray-300 font-bold">Name</span>
                                            <input name="name" className="focus:outline-none px-3 bg-transparent text-gray-50 max-w-[44ch]" placeholder="Gideon Gleeful" required=""/>
                                        </label>
                                        <label className="flex border-b border-gray-600 h-12 py-3 items-center rounded-b-lg">
                                            <span className="text-right px-2 text-gray-300 font-bold">Email</span>
                                            <input name="email" type="email" className="focus:outline-none px-3 bg-transparent text-gray-50 max-w-[44ch]" placeholder="abc@example.com" required=""/>
                                        </label>
                                    </fieldset>
                                </section>
                            </form>
                        </div>
                        <div className="w-full mx-auto rounded-lg border border-gray-600 font-light mb-6">
                            <div className="w-full p-3 border-b border-gray-600">
                                <div className="mb-5">
                                    <label for="type1" className="flex items-center cursor-pointer">
                                        <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked/>
                                        <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-6 ml-3"/>
                                    </label>
                                </div>
                            </div>
                            <div className="w-full p-3">
                                <label for="type2" className="flex items-center cursor-pointer">
                                    <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2"/>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" width="80" className="ml-3"/>
                                </label>
                            </div>
                        </div>
                        <div>
                            <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment;