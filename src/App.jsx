import React, { useEffect, useState } from "react";

// SOCIAL LINKS
const SOCIAL_LINKS = {
  youtube: "https://www.youtube.com/channel/UCtB2I-gkYIxhqBSbpfR1Myg",
  instagram: "https://www.instagram.com/bossdoggashley/",

  twitter: "https://x.com/bossdoggoutlaw",
  facebook: "https://www.facebook.com/travisashley70",
  tiktok: "https://www.tiktok.com/@general_kobraa",
  contact: "https://mail.google.com/mail/?view=cm&fs=1&to=troybaby80@gmail.com",
};

// GOOGLE ADS
const GOOGLE_ADS_ID = "AW-17170342680";
const GOOGLE_CONVERSION_LABEL = "gVdICK2TkawcEJjGuvs_";

// HERO IMAGE
const HERO_PATH = "/hero.png";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xredzvwa";

function installGoogleTag(id) {
  if (typeof window === "undefined" || !id) return;

  const existing = document.querySelector(`script[data-google-ads-tag="${id}"]`);
  if (!existing) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    script.setAttribute("data-google-ads-tag", id);
    document.head.appendChild(script);
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function () {
      window.dataLayer.push(arguments);
    };

  window.gtag("js", new Date());
  window.gtag("config", id);
}

function trackConversion(actionName) {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !window.gtag) {
      resolve(false);
      return;
    }

    const conversionActions = [
      "email_input_click",
      "footer_join_click",
      "contact_submit_click",
    ];

    window.gtag("event", actionName, {
      event_category: "engagement",
      event_label: actionName,
    });

    if (!conversionActions.includes(actionName)) {
      resolve(true);
      return;
    }

    let finished = false;
    const finish = () => {
      if (!finished) {
        finished = true;
        resolve(true);
      }
    };

    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${GOOGLE_CONVERSION_LABEL}`,
      value: 1.0,
      currency: "USD",
      transaction_id: `kobraa_${Date.now()}`,
      event_callback: finish,
      event_timeout: 2000,
    });

    setTimeout(finish, 2100);
  });
}

function openLink(url, actionName) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", actionName, {
      event_category: "engagement",
      event_label: actionName,
    });
  }

  window.open(url, "_blank", "noopener,noreferrer");
}

async function submitEmailLead(emailValue) {
  const cleanEmail = String(emailValue || "").trim();

  if (!cleanEmail || !cleanEmail.includes("@")) {
    alert("Please enter a valid email first.");
    return false;
  }

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: cleanEmail,
        source: "General Kobraa website",
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    await trackConversion("footer_join_click");

    alert("Thank you. Your email has been received.");
    return true;
  } catch (error) {
    console.error(error);
    alert("The signup did not go through. Please try again.");
    return false;
  }
}

function Hotspot({ label, style, onClick }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      style={{
        position: "absolute",
        zIndex: 50,
        background: "transparent",
        border: "none",
        color: "transparent",
        cursor: "pointer",
        padding: 0,
        margin: 0,
        outline: "none",
        ...style,
      }}
    >
      {label}
    </button>
  );
}

function runSanityChecks() {
  const checks = [
    HERO_PATH === "/hero.png",
    GOOGLE_ADS_ID.startsWith("AW-"),
    SOCIAL_LINKS.youtube.startsWith("https://"),
    SOCIAL_LINKS.facebook.startsWith("https://"),
    SOCIAL_LINKS.tiktok.startsWith("https://"),
    !Object.values(SOCIAL_LINKS).some((link) => String(link).includes("YOURNAME")),
  ];

  checks.forEach((passed, index) => {
    if (!passed) console.error("Sanity check failed", index);
  });
}

export default function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    runSanityChecks();
    installGoogleTag(GOOGLE_ADS_ID);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#000",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
      }}
    >
      <section
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1024px",
          margin: "0 auto",
          background: "#000",
          lineHeight: 0,
        }}
      >
        <img
          src={HERO_PATH}
          alt="King Warlord Kobraa website layout"
          draggable="false"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            margin: 0,
            padding: 0,
            userSelect: "none",
          }}
        />

        {/* NAVIGATION */}
        <Hotspot label="Home" style={{ left: "31.4%", top: "3.0%", width: "6.2%", height: "2.5%" }} onClick={() => {
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "nav_home_click", {
              event_category: "engagement",
              event_label: "nav_home_click",
            });
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        }} />
        <Hotspot label="Videos" style={{ left: "42.2%", top: "3.0%", width: "7.4%", height: "2.5%" }} onClick={() => openLink(SOCIAL_LINKS.youtube, "nav_videos_click")} />
                <Hotspot label="About" style={{ left: "51.8%", top: "3.0%", width: "7.2%", height: "2.5%" }} onClick={() => {
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "nav_about_click", {
              event_category: "engagement",
              event_label: "nav_about_click",
            });
          }
          setShowAbout(true);
        }} />
        <Hotspot label="Contact" style={{ left: "61.4%", top: "3.0%", width: "8.4%", height: "2.5%" }} onClick={() => openLink(SOCIAL_LINKS.contact, "nav_contact_click")} />

        {/* SOCIAL ICONS */}
        <Hotspot label="Top YouTube" style={{ left: "74.9%", top: "2.75%", width: "3.1%", height: "2.8%" }} onClick={() => openLink(SOCIAL_LINKS.youtube, "top_youtube_click")} />
        <Hotspot label="Top Instagram" style={{ left: "80.0%", top: "2.75%", width: "3.1%", height: "2.8%" }} onClick={() => openLink(SOCIAL_LINKS.instagram, "top_instagram_click")} />
        <Hotspot label="Top X" style={{ left: "85.0%", top: "2.75%", width: "3.1%", height: "2.8%" }} onClick={() => openLink(SOCIAL_LINKS.twitter, "top_x_click")} />
        <Hotspot label="Top Facebook" style={{ left: "89.7%", top: "2.75%", width: "3.1%", height: "2.8%" }} onClick={() => openLink(SOCIAL_LINKS.facebook, "top_facebook_click")} />
        <Hotspot label="Top TikTok" style={{ left: "94.0%", top: "2.75%", width: "3.1%", height: "2.8%" }} onClick={() => openLink(SOCIAL_LINKS.tiktok, "top_tiktok_click")} />

        {/* HERO BUTTON */}
        <Hotspot label="Visit Channel" style={{ left: "4.0%", top: "35.75%", width: "20.0%", height: "3.25%" }} onClick={() => openLink(SOCIAL_LINKS.youtube, "hero_visit_channel_click")} />

        {/* ACTION BUTTONS */}
        <Hotspot label="Subscribe" style={{ left: "11.2%", top: "61.9%", width: "19.5%", height: "3.4%" }} onClick={() => openLink(SOCIAL_LINKS.youtube, "subscribe_click")} />
        <Hotspot label="Facebook" style={{ left: "40.0%", top: "61.9%", width: "20.0%", height: "3.4%" }} onClick={() => openLink(SOCIAL_LINKS.facebook, "facebook_middle_button_click")} />

        {/* LAUNCH BUTTON */}
        <Hotspot label="Launch Now" style={{ left: "54.0%", top: "80.25%", width: "21.0%", height: "3.4%" }} onClick={() => openLink(SOCIAL_LINKS.youtube, "launch_now_click")} />

        {/* FOOTER SOCIALS */}
        <Hotspot label="Footer YouTube" style={{ left: "5.2%", top: "94.45%", width: "3.0%", height: "2.4%" }} onClick={() => openLink(SOCIAL_LINKS.youtube, "footer_youtube_click")} />
        <Hotspot label="Footer Instagram" style={{ left: "10.5%", top: "94.45%", width: "3.0%", height: "2.4%" }} onClick={() => openLink(SOCIAL_LINKS.instagram, "footer_instagram_click")} />
        <Hotspot label="Footer X" style={{ left: "16.0%", top: "94.45%", width: "3.0%", height: "2.4%" }} onClick={() => openLink(SOCIAL_LINKS.twitter, "footer_x_click")} />
        <Hotspot label="Footer Facebook" style={{ left: "21.3%", top: "94.45%", width: "3.0%", height: "2.4%" }} onClick={() => openLink(SOCIAL_LINKS.facebook, "footer_facebook_click")} />
        <Hotspot label="Footer TikTok" style={{ left: "26.1%", top: "94.45%", width: "3.0%", height: "2.4%" }} onClick={() => openLink(SOCIAL_LINKS.tiktok, "footer_tiktok_click")} />

        <Hotspot label="Follow Now" style={{ left: "69.0%", top: "61.9%", width: "18.9%", height: "3.4%" }} onClick={() => openLink(SOCIAL_LINKS.tiktok, "tiktok_follow_click")} />

        {/* FOOTER CONTACT */}
        <input
          type="email"
          aria-label="Email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder=""
          style={{
            position: "absolute",
            zIndex: 60,
            left: "66.4%",
            top: "94.35%",
            width: "20.0%",
            height: "2.85%",
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "clamp(10px, 1.2vw, 16px)",
            padding: "0 12px",
            outline: "none",
            boxSizing: "border-box",
            lineHeight: "normal",
          }}
        />
        <button
          type="button"
          aria-label="Submit email"
          title="Submit email"
          onClick={async () => {
            const success = await submitEmailLead(email);
            if (success) setEmail("");
          }}
          style={{
            position: "absolute",
            zIndex: 61,
            left: "87.4%",
            top: "94.35%",
            width: "7.8%",
            height: "2.85%",
            background: "transparent",
            border: "none",
            color: "transparent",
            cursor: "pointer",
            padding: 0,
            margin: 0,
            outline: "none",
          }}
        >
          Join
        </button>
      </section>

      <div
        style={{
          width: "100%",
          maxWidth: "1024px",
          margin: "10px auto 22px",
          textAlign: "center",
          color: "rgba(255,255,255,0.72)",
          fontSize: "14px",
          lineHeight: 1.5,
        }}
      >
        <button
          type="button"
          onClick={() => setShowPrivacy(true)}
          style={{
            background: "transparent",
            border: "none",
            color: "rgba(255,255,255,0.85)",
            textDecoration: "underline",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Privacy Policy
        </button>
        <span style={{ margin: "0 8px", color: "rgba(255,255,255,0.35)" }}>•</span>
        <span>Contact: troybaby80@gmail.com</span>
      </div>

      {showAbout && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="About General Kobraa"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setShowAbout(false)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "760px",
              background: "linear-gradient(180deg, #120000 0%, #050505 100%)",
              border: "2px solid #b30000",
              borderRadius: "18px",
              padding: "36px",
              color: "white",
              boxShadow: "0 0 50px rgba(255,0,0,0.45)",
              lineHeight: 1.6,
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <h1 style={{ margin: 0, color: "#ffffff", fontSize: "42px", fontWeight: 900, letterSpacing: "0.04em", textTransform: "uppercase" }}>
              About General Kobraa
            </h1>
            <div style={{ height: "3px", width: "120px", background: "#ff0000", margin: "18px 0 24px", boxShadow: "0 0 18px rgba(255,0,0,0.8)" }} />
            <p style={{ margin: 0, fontSize: "20px", color: "rgba(255,255,255,0.86)" }}>
              General KOBRAA is more than content. This is a movement built from survival,
              pressure, discipline, ambition, and vision. From gaming to media, voice,
              music, storytelling, and brand-building, the empire represents strength,
              culture, evolution, and controlled aggression.
            </p>
            <p style={{ marginTop: "22px", fontSize: "20px", color: "rgba(255,255,255,0.86)" }}>
              The mission is simple: build a powerful audience, create unforgettable visuals,
              speak with authority, and turn General Kobraa into a recognizable digital empire.
            </p>
            <button type="button" onClick={() => setShowAbout(false)} style={{ marginTop: "30px", background: "#9b0000", color: "white", border: "1px solid #ff1a1a", padding: "14px 30px", fontSize: "18px", fontWeight: 800, cursor: "pointer", borderRadius: "10px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Close
            </button>
          </div>
        </div>
      )}

      {showPrivacy && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Privacy Policy"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            background: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setShowPrivacy(false)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "820px",
              maxHeight: "86vh",
              overflowY: "auto",
              background: "linear-gradient(180deg, #100000 0%, #050505 100%)",
              border: "2px solid #b30000",
              borderRadius: "18px",
              padding: "34px",
              color: "white",
              boxShadow: "0 0 50px rgba(255,0,0,0.42)",
              lineHeight: 1.65,
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <h1 style={{ margin: 0, fontSize: "38px", fontWeight: 900, textTransform: "uppercase" }}>Privacy Policy</h1>
            <div style={{ height: "3px", width: "120px", background: "#ff0000", margin: "16px 0 22px" }} />
            <p><strong>General Kobraa</strong> respects visitor privacy. This website is used to share official General Kobraa links, content, updates, and contact options.</p>
            <p><strong>Information collected:</strong> If you type an email into the Join section, that email is submitted through Formspree and used only so you can contact or join General Kobraa updates. The site may also coll
            <p><strong>Google Ads and conversion tracking:</strong> This website uses Google Ads tracking to measure legitimate contact or signup actions. Google may use cookies or similar technology to measure ad performance.</p>
            <p><strong>External links:</strong> This site links to YouTube, Instagram, X, Facebook, TikTok, and email. Those platforms have their own privacy policies.</p>
            <p><strong>Contact:</strong> For privacy questions or removal requests, email <strong>troybaby80@gmail.com</strong>.</p>
            <p><strong>Last updated:</strong> 2026.</p>
            <button type="button" onClick={() => setShowPrivacy(false)} style={{ marginTop: "22px", background: "#9b0000", color: "white", border: "1px solid #ff1a1a", padding: "14px 30px", fontSize: "18px", fontWeight: 800, cursor: "pointer", borderRadius: "10px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
