import React from "react";

function Homepage(props) {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <div className="header-title">What is coronavirus? </div>

          <div className="header-text">
            <div className="img"></div>
            Coronaviruses are a family of viruses that can cause respiratory
            illness in humans. They are called “corona” because of crown-like
            spikes on the surface of the virus. Severe acute respiratory
            syndrome (SARS), Middle East respiratory syndrome (MERS) and the
            common cold are examples of coronaviruses that cause illness in
            humans. The new strain of coronavirus — SARS-CoV-2 — was first
            reported in Wuhan, China in December 2019. It has since spread to
            every country around the world.COVID-19 most often causes
            respiratory symptoms that can feel much like a cold, a flu, or
            pneumonia. COVID-19 may attack more than your lungs and respiratory
            system. Other parts of your body may also be affected by the
            disease.Like many other respiratory viruses, coronaviruses spread
            quickly through droplets that you project out of your mouth or nose
            when you breathe, cough, sneeze, or speak. The word corona means
            crown and refers to the appearance that coronaviruses get from the
            spike proteins sticking out of them. These spike proteins are
            important to the biology of this deadly virus which cannot be easily
            prevented.
            <h3 className="head2">How do you get COVID-19?</h3>
            SARS-CoV-2, the virus that causes COVID-19, enters your body through
            your mouth, nose or eyes (directly from the airborne droplets or
            from the transfer of the virus from your hands to your face) . It
            then travels to the back of your nasal passages and mucous membrane
            in the back of your throat. It attaches to cells there, begins to
            multiply and moves into lung tissue . From there, the virus can
            spread to other body tissues.
            <h3 className="head3">Where do coronaviruses come from?</h3>
            Coronaviruses are often found in bats, cats and camels. The viruses
            live in but dont infect the animals. Sometimes these viruses then
            spread to different animal species. The viruses may change (mutate)
            as they transfer to other species. Eventually, the virus can jump
            from animal species and begin to infect humans. In the case of
            SARS-CoV-19, the first people infected are thought to have
            contracted the virus at a food market that sold meat, fish and live
            animals.
          </div>
        </div>
      </div>

      <div className="home-body">
        <div className="home-body-tv">
          <iframe
            width="1000"
            height="480"
            src="https://www.youtube.com/embed/HjO8IU7Hb6A"
            title="What is COVID-19"
            frameborder="0"
            allowfullscreen="true"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    
      
  
    </>
  );
}

export default Homepage;
