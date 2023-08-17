
const Accordation = () => {
    return (
        <>
            <div className="w-full h-full mb-10 flex justify-center">
                <div className="tablet:w-11/12 bigTablet:w-[86%] p-2 tablet:p-0 desktop:w-[70%]">
                    <h1 className="font-Manrope text-xl text-center mb-3 tablet:mb-7 tablet:text-3xl">Bankability & Risk profile</h1>
                    <div className="collapse collapse-plus bg-base-200 border-b border-black rounded-none">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl bigTablet:text-lg desktop:text-2xl  font-Raleway">
                            Do you require a Swiss ISIN number?
                        </div>
                        <div className="collapse-content font-Quicksand text-neutral-700 border-b border-black rounded-none">
                            <p>Investors requiring our certificate as bankable security can request a Swiss ISIN number upon request. By default, our certificates are issued as book-entry securities to reduce the issuance costs further. Should you require bankability, the costs will be to the total product costs, resulting in a slightly lower annual return.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl bigTablet:text-lg desktop:text-2xl font-Raleway border-b border-black rounded-none">
                            What are the additional fees for an ISIN number/bankability?
                        </div>
                        <div className="collapse-content font-Quicksand text-neutral-700 border-b border-black rounded-none">
                            <p>
                                Typically the annual fees are around 0.48% p.a. (external fees) for bankability. On top, the certificate holder will pay a custodian fee at his bank. Secondary transactions usually cost about 1% of the total volume. The fees are charged by third-party providers, and Amea has no control over the exact fees or future price increases. Therefore, the exact costs can only be terminated once we set up a bankable certificate issue.

                                The fees for the bankable certificate issue will be added to the total product costs. We, therefore, suggest working with the non-bankable issues we offer whenever possible.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl bigTablet:text-lg desktop:text-2xl font-Raleway border-b border-black rounded-none">
                            General information about the risk profile
                        </div>
                        <div className="collapse-content font-Quicksand text-neutral-700 border-b border-black rounded-none">
                            <p>

                                Every investment comes with a certain degree of risk, and our certificates are no exception.

                                The terms and conditions are exclusively according to the official term sheet available at our registered office. Before deciding on an investment, read the risk warnings carefully, or consult a trusted financial expert in case of doubt.

                                Please note that historical or projected performance information is not a reliable indicator for future earnings or losses. No investment advice: The mentioned explanations are neither investment advice nor a recommendation to buy or sell any financial instruments.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl bigTablet:text-lg desktop:text-2xl font-Raleway border-b border-black rounded-none">
                            Illiquidity of Certificates
                        </div>
                        <div className="collapse-content font-Quicksand text-neutral-700 border-b border-black rounded-none">
                            <p>
                                The certificates are not listed for trading on any stock exchange and are not traded via any trading system. Therefore, there is no guarantee that the Certificate holder will find a buyer for his certificates who will be willing to purchase his certificate(s) to pay the purchase price he is asking.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl bigTablet:text-lg desktop:text-2xl font-Raleway border-b border-black rounded-none">
                            Financing risk
                        </div>
                        <div className="collapse-content font-Quicksand text-neutral-700 border-b border-black rounded-none">
                            <p>
                                For the performance of its business operations, the Issuer must rely to a considerable extent on financial resources made available to it either as equity or as borrowed capital. The willingness of investors to provide financial means to the Issuer or to invest in the Issuer’s equity not only depends upon the Issuer operating successfully but also on general conditions in capital markets.

                                Should the Issuer not be able to raise the financial resources needed, then not all of the projects attempted by the Issuer can be achieved, which can have a negative impact on business operations and business profits.

                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl bigTablet:text-lg desktop:text-2xl font-Raleway border-b border-black rounded-none">
                            Not exhaustive
                        </div>
                        <div className="collapse-content font-Quicksand text-neutral-700 border-b border-black rounded-none">
                            <p>
                                This list is solely to understand the risk profile of our certificate issue. The list is not exhaustive, and the terms and conditions are exclusively according to the official term sheet available at our registered office. Before deciding on an investment, read the risk warnings carefully, or consult a trusted financial expert in case of doubt.

                                Please note that historical or projected performance information is not a reliable indicator for future earnings or losses. No investment advice: The mentioned explanations are neither investment advice nor a recommendation to buy or sell any financial instruments.


                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordation
