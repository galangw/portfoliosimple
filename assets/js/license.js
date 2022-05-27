AOS.init();

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Cpanel And WHM Administration Certificate",
    cardImage:
      "https://images.tokopedia.net/img/cache/500-square/product-1/2017/2/13/15958669/15958669_e61379ba-135a-43bd-ba57-b520b3ffc598_400_400.png.webp",
    place: "Cpanel University",
    time: "Cert ID: (b609-8a86-c981-7e08)",
    desp: "<li>Issued on 09/24/2021</li>",
  },
  {
    title: "Junior Web Developer",
    cardImage: "https://cdn.timesmedia.co.id/images/2021/06/19/kominfo.jpg",
    place: "DTS-VSGA Kominfo",
    time: "Reg. No : 02116206151-15 - Present",
    desp: "<li>Worked with MOZILLA as a part of Google Summer Of Code.</li><li>Worked on Extension Activity Monitor which is a privileged extension for Firefox that uses the activityLog API (privileged API) to monitor the activities of the other installed extensions.</li><li>The activityLog API listens for logs from other installed extensions.</li>",
  },
  {
    title: "WordPress Certification",
    cardImage:
      "https://certification.templatemonster.com/wp-content/uploads/2020/05/wordpress-featured-small.png",
    place: "By templatemonster",
    time: "(Present)",
    desp: "<li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title pt-5">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
