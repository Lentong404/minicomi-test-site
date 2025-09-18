export default function Banner() {
  return (
    
    <div className ="mt-8 font-dongle">
        <img src="/banner.png" alt="art commission web hero banner" className =""/>
        
        <div className ="flex flex-col items-center ">
            <p className="text-2xl">Banner and poster art by fishsideup</p>
            
            <button className="rounded-xl bg-midblue-500 text-white hover:bg-blue-600  min-w-24 ">
                <a href="" className ="">Credit</a>
            </button>
        </div>

        

        {/* Mini Information Vendor Roster and Map */}
        <div className="flex flex-col items-center mt-4 text-center">
            <h1 className="text-4xl font-bold ">MiniComi 2025!</h1>
            <p className="text-lg">MiniComi is back in 2025 at the Roundhouse Community Arts & Recreation Centre! </p>
            <p className="text-lg">Join us on Sat, Jul 26th!</p>
            
            <button className="flex justify-center rounded-xl bg-midblue-500 text-white min-w-2xs text-xl mt-4">
                <a href="" className="font-bold">Vendor Roster</a>
            </button>

            <img src="/minicomi-map.webp" alt="minicomi 2025 map layout" className ="m-8"/>
            <p>
                Roundhouse Community Arts & Recreation Centre 181 Roundhouse Mews Vancouver, BC V6Z 2W3 Saturday, July 26, 2025 11:30am - 6pm
            </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col items-center text-center m-8 gap-8 md:flex-row justify-center gap-16">
            {/* Social Media */}
            <div className="block min-w-56 min-h-56 p-6 border border-gray-200 rounded-xl shadow-sm bg-iceblue-500 md:min-w-80 md:min-h-80">
                <h3 className="mb-2 text-2xl font-bold">Follow us on social media!</h3>
                <p className="font-normal"> </p>
            </div>
            {/* Commission Opportunity */}
            <div className="block min-w-56 min-h-56 p-6 border border-gray-200 rounded-xl shadow-sm bg-iceblue-500 md:min-w-80 md:min-h-80">
                <h3 className="mb-2 text-2xl font-bold">Commission Opportunity</h3>
                <p className="font-normal"> </p>
            </div>
            {/* Sign up for our mailing list!*/}
            <div className="block min-w-56 min-h-56 p-6 border border-gray-200 rounded-xl shadow-sm bg-iceblue-500 md:min-w-80 md:min-h-80">
                <h3 className="mb-2 text-2xl font-bold">Sign up for our mailing list</h3>
                <p className="font-normal"> </p>
            </div>
        </div>
    </div>
    
  );
}