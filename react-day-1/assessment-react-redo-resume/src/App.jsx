function App() {
  return (
    <div className="main-resume">
      <div className="resume">
        <div className="intro">
          <img
            src="/image/khomeini.png"
            className="profile-pic"
            alt="profile picture"
          />
          <h3>Abang Muhamad Khomeini Bin Abang Seruji</h3>
          <div className="sub-intro">
            <p>
              <span>Contact Number:</span> 017-7887101
            </p>
            <p>
              <span>Email:</span>
              <a href="mailto:amkbas89@gmail.com"> amkbas89@gmail.com</a>
            </p>
            <p>
              <span>Address:</span> No 398 Lot 1071 Taman Sukma 93050 Kuching
              Sarawak
            </p>
          </div>
          <div className="hor-line"></div>
        </div>

        <div className="profile">
          <div className="sub-profile">
            <h3>Profile</h3>
            <p>
              I am a <i>conscientious person</i> who works hard and pays
              attention to details. I’m <i>flexible</i>,{" "}
              <i>quick to pick up new skills</i> and <i>eager</i> to learn from
              others. I have experience in customer service, negotiation skill
              and aiming to use my ability and knowledge to work for your
              organization.
            </p>
          </div>
        </div>

        <div className="education">
          <div className="sub-edu">
            <h3>Education</h3>

            <div className="order-list">
              <ol style={{ listStyleType: "decimal" }}>
                <li>
                  Universiti Teknologi Mara (UiTM), Puncak Perdana Campus (2010
                  - 2014)
                  <ul style={{ listStyleType: "disc" }}>
                    <li>
                      Bachelor of Science in Information Studies (Hons)
                      Information System Management
                    </li>
                    <li>CGPA: 3.31</li>
                  </ul>
                </li>

                <li>
                  Sekolah Menengah Kebangsaan Bako (2007 - 2008)
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Sijil Tinggi Pelajaran Malaysia</li>
                    <li>Grade: B, C+, C+, C</li>
                  </ul>
                </li>
                <li>
                  Menengah Kebangsaan Agama Matang (2002 - 2006)
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Sijil Pelajaran Malaysia</li>
                    <li>Grade: 3B, 3B, 3B, 4B, 5C, 5C, 5C, 7D, 8E, 8E</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="work-exp">
          <div className="sub-work-exp">
            <h3>Working Experiences</h3>
            <p>
              Currently, I've had the opportunity working at{" "}
              <span>
                {" "}
                <a href="https://www.aeoncredit.com.my/">
                  Aeon Credit Service (M) Berhad
                </a>
              </span>{" "}
              as a collector. Altough, I working in the field that different
              from my background in <i>Information System Management</i>, I'm
              happy because i can gain much experience and skills in customer
              service field such as <i>negotation sills</i>,{" "}
              <i>customer service skills</i> and also{" "}
              <i>time management skills</i>. Prior to that, I was involved with{" "}
              <span>
                {" "}
                <a href="https://www.sains.com.my/web/home/index">
                  Sarawak Information System Sdn Bhd (SAINS)
                </a>
              </span>{" "}
              as Contact Centre Executive for Skim Latihan 1Malaysia program for
              1 year. Now, i'm still working but i'm very excited joined{" "}
              <i>Software Engineer Bootcamp (SEC) 2023</i> to add my value
              skills and experiences to work in the IT industry. If you have any
              questions or would like to learn more about my experience, feel
              free to ask!
            </p>
          </div>
        </div>

        <div className="interest">
          <div className="sub-interest">
            <h3>Interest</h3>
            <p>
              A passionate hiker, I find solace and inspiration in exploring the
              great outdoors. Regular hiking expeditions have instilled in me a
              deep sense of resilience, adaptability, and strategic planning.
              Navigating diverse terrains and overcoming challenges on the trail
              mirrors my approach to problem-solving in professional settings.
              Additionally, this activity underscores my commitment to
              maintaining a healthy, balanced lifestyle, fostering both physical
              and mental well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
