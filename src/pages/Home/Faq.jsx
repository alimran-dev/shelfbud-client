const Faq = () => {
  return (
    <div>
      <section className="bg-[#F5EFE6] text-gray-800 mx-12 my-10 rounded-md">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 text-gray-400">
            Welcome to our FAQ section, where we address common queries about
            ShelfBud. Whether you&apos;re a book enthusiast looking to sell,
            buy, or explore new genres, find answers to your questions here. If
            you can&apos;t find what you&apos;re looking for, feel free to reach
            out to our support team for personalized assistance.
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg cursor-pointer">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                How does ShelfBud work for sellers?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                Selling on ShelfBud is easy! Simply create an account, list your
                books with details and images, set a price, and wait for
                interested readers to make a purchase. We provide a
                user-friendly platform to showcase your books to a wide
                audience.
              </p>
            </details>
            <details className="w-full border rounded-lg cursor-pointer">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                Is it safe to buy books on ShelfBud?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                Absolutely! ShelfBud prioritizes the safety and security of our
                users. We facilitate secure transactions, and our user reviews
                and ratings help ensure a trustworthy buying experience
              </p>
            </details>
            <details className="w-full border rounded-lg cursor-pointer">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                How are shipping and delivery handled??
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                Shipping and delivery are determined by the sellers. Each
                listing provides information on shipping options and estimated
                delivery times. Communicate with the seller for any specific
                shipping queries.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
