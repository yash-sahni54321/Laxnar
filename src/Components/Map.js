import React from "react";

const Map = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8 px-4">
        <div className="w-full">
          <div className="pb-1 pt-4">
            <h1 className="text-3xl font-bold text-gray-600 py-2 text-center">
              Our Gorakhpur Address
            </h1>
            <iframe
              className="w-full h-96 border border-gray-300 rounded"
              title="Gorakhpur Address"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.67717486158676!2d83.35444030647423!3d26.74964745507124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39914562ee9097a5%3A0xd652c690a7af1cad!2sLAXMI%20NARAYAN%20MANDIR!5e0!3m2!1sen!2sin!4v1689548930812!5m2!1sen!2sin"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 p-4">
            <div className="pb-1 pt-4">
              <h1 className="text-3xl font-bold text-gray-600 py-2 text-center">
                Our Lucknow Address
              </h1>
              <iframe
                className="w-full h-96 border border-gray-300 rounded"
                title="Lucknow Address"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.13517552307!2d80.95103731441569!3d26.89920476714839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957cf680ef3af%3A0xa8e4739209f6f093!2sC-62%2C%20Sector%20M%2C%20Aliganj%2C%20Lucknow%2C%20Uttar%20Pradesh%20226021!5e0!3m2!1sen!2sin!4v1675506770069!5m2!1sen!2sin"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="w-full sm:w-1/2 p-4">
            <div className="pb-1 pt-4">
              <h1 className="text-3xl font-bold text-gray-600 py-2 text-center">
                Our Ghaziabad Address
              </h1>
              <iframe
                className="w-full h-96 border border-gray-300 rounded"
                title="Ghaziabad Address"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d421.06922796917746!2d77.34887094203378!3d28.665700621460584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbf5f50569db%3A0x7854c2eaecb1f830!2sLAXNAR-LAXMI%20NARYAN%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1686816914357!5m2!1sen!2sin"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
