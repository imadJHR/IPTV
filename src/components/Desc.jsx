const Desc = () => {
  const produit = [
    {
      icon: "https://i0.wp.com/iptvtemplate.shop/wp-content/uploads/2023/04/direction-board.png?fit=100%2C100&ssl=1",
      title: "Channels from115 countries worldwide",
      desc: "You can watch TV channels from around the world (Netherlands / Belgium / Germany / UK / Spain / Portugal / Poland / Italy / Israel / Ex-Yu / Hindi / Arabic / Turkey…)						",
    },
    {
      icon: "https://i0.wp.com/iptvtemplate.shop/wp-content/uploads/2023/04/lock-key.png?fit=100%2C100&ssl=1",
      title: "7 days money backguarantee",
      desc: "Within 7 days of your purchase you have the option to cancel our IPTV subscription if you are not satisfied. Then you will receive a full refund from us.						",
    },
    {
      icon: "https://i0.wp.com/iptvtemplate.shop/wp-content/uploads/2023/04/badge.png?fit=100%2C100&ssl=1",
      title: "High QualityHD/FHD/4K/8K",
      desc: "We offer all image qualities to view our iptv service everywhere, regardless of your network speed on: Mobile / TV / Android box / PC …						",
    },
  ];
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8  rounded-lg ">
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 ">
          {produit.map((item, index) => {
            return (
              <li key={index} className="text-center ">
                <div className=" justify-center flex">
                  <img src={item.icon} alt="" className="sm:h-[150px]" />
                </div>

                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>

                <p className="mt-1 text-gray-300">{item.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Desc;
