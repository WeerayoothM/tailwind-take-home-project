import React from "react";
import DetailBox from "./DetailBox";
import DetailSpec from "./DetailSpec";

function ProductDetail() {
  return (
    <div>
      <h4 className="text-sm text-gray-500">Starting at</h4>
      <h2 className="text-5xl text-gray-900 font-extrabold leading-11">
        $1,799
      </h2>
      <p className="text-lg leading-6 text-gray-900 mt-6">
        The KEMPER PROFILER™ is the leading-edge digital guitar amplifier and
        all-in-one effects processor.
      </p>
      <p className="text-base leading-6 text-gray-500 mt-4">
        Hailed as a game-changer by guitarists the world over, the PROFILER™ is
        the first digital guitar amp to really nail the full and dynamic sound
        of a guitar or bass amp.
      </p>
      <p className="text-base leading-6 text-gray-500 mt-4">
        This is made possible by a radical, patented technology and concept
        which we call "PROFILING".
      </p>
      <h4 className="text-gray-900 text-lg leading-7 mt-12">Form Factor</h4>
      <div className="grid sm:grid-cols-2 gap-4 mt-2 transition-all ease-in-out delay-150 duration-100">
        <DetailBox
          title="Profiler Head"
          body="Compact amplifier head, perfect for a speaker cabinet or desk."
          style="border-gray-700"
        />
        <DetailBox
          title="Profiler Rack"
          body="3U rackmount version of the classic profiling amplifier."
        />
      </div>
      <h4 className="text-gray-900 text-lg leading-7 mt-12">Power Amp</h4>
      <div className="grid grid-cols-1 gap-4 mt-2">
        <DetailBox
          title="None"
          body="Use in the studio or with your own power amp."
          style="border-gray-700"
        />
        <DetailBox
          title="Powered"
          body="Built-in 600W solid state power amp."
          addOnPrice="449"
        />
      </div>
      <h4 className="text-gray-900 text-lg leading-7 mt-12">Foot Controller</h4>
      <div className="grid grid-cols-1 gap-4 mt-2">
        <DetailBox title="None" style="border-gray-700" />
        <DetailBox title="Profiler Remote Foot Controller" addOnPrice="449" />
      </div>
      <h4 className="text-gray-900 text-lg leading-7 mt-12 ">Specifications</h4>
      <div className="mt-2 border-t border-gray-200">
        <DetailSpec title="Amp Models" detail="200" />
        <DetailSpec title="Effects Loop" detail="yes" />
        <DetailSpec title="Inputs" detail="200" />
        <DetailSpec title="Outputs" detail='1 x 1/4", 2 x XLR, 2 x 1/4"' />
        <DetailSpec title="MIDI I/O" detail="In/Out/Thru" />
        <DetailSpec title="Height" detail='8.54"' />
        <DetailSpec title="Width" detail='14.88"' />
        <DetailSpec title="Depth" detail='6.81"' />
        <DetailSpec title="Weight" detail="11.73 lbs" />
      </div>
    </div>
  );
}

export default ProductDetail;
