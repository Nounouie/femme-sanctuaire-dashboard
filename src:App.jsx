import { useState } from "react";

export default function App() {
  const [activeSection, setActiveSection] = useState("vision");
  const [checked, setChecked] = useState({});

  const sections = [
    { id: "vision", label: "Vision" },
    { id: "identity", label: "Identité" },
    { id: "affirmations", label: "Croyances" },
    { id: "eft", label: "EFT" },
    { id: "ritual", label: "Rituel" },
  ];

  const visionImages = [
    {
      title: "Maison Sanctuaire",
      desc: "Une maison lumineuse en hauteur, avec vue dégagée sur la nature, l’herbe et l’eau scintillante.",
      prompt: "Maison contemporaine organique, baies vitrées, nature dégagée, eau scintillante, lumière dorée douce, tons écru et bois clair.",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Femme Sanctuaire",
      desc: "Une femme sereine, habillée de matières fluides, douces et lumineuses, qui rayonne la paix.",
      prompt: "Femme élégante et sereine, robe fluide écru, lumière naturelle, peau lumineuse, énergie douce, esthétique quiet luxury.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Transmission & Livres",
      desc: "Mes livres dans les librairies, entre les mains de personnes touchées par mon univers.",
      prompt: "Livres élégants en librairie, femme auteure en dédicace, lecteurs émus, ambiance chaleureuse, lumière douce.",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Amour Stable",
      desc: "Un amour calme, protecteur, sincère, où je me sens choisie, libre et soutenue.",
      prompt: "Couple tendre et élégant, homme attentionné et protecteur, promenade au soleil, amour mature et doux.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  const identity = [
    "Je suis une femme profondément alignée, calme et puissante.",
    "Je suis émotionnellement en sécurité dans ma vie, mon foyer, mon amour et ma réussite.",
    "Je suis douce sans me trahir, aimante sans me sacrifier, ambitieuse sans m’épuiser.",
    "Je transforme ma sensibilité en sagesse, ma vision en matière, ma présence en refuge.",
    "Je construis une vie qui nourrit mon corps, mon cœur, mon esprit, mes proches et mon héritage.",
    "Je suis la Femme Sanctuaire : celle qui crée de la beauté, de la sécurité et du sens partout où elle passe.",
  ];

  const affirmations = [
    "Je peux réussir sans sacrifier ma paix.",
    "Je mérite un amour honnête, stable et réciproque.",
    "Je peux être prospère, libre et sereine.",
    "Ma douceur mérite le respect et la réciprocité.",
    "Je construis une vie belle, stable et profondément alignée.",
    "Je peux ralentir et continuer à prospérer.",
    "L’argent soutient mon bien-être, mes choix, ma famille et mon expansion.",
    "Je suis capable de reconnaître ce qui est sain pour moi.",
    "Je peux aimer sans me perdre et recevoir sans culpabilité.",
  ];

  const eft = [
    {
      title: "1. Déprogrammer les anciennes peurs",
      lines: [
        "Même si une partie de moi a peur de manquer, je reconnais cette peur avec douceur.",
        "Même si j’ai peur que la maison, l’amour ou la réussite deviennent un poids, je m’autorise à respirer.",
        "Je libère l’idée que je dois tout porter seule.",
        "Je libère l’idée que l’amour finit toujours par me décevoir.",
        "Je libère l’idée que réussir signifie perdre mon temps, mon essence ou ma paix.",
      ],
    },
    {
      title: "2. Transition : et si je m’autorisais à y croire ?",
      lines: [
        "Et si une autre réalité était possible pour moi ?",
        "Et si je pouvais réussir sans m’épuiser ?",
        "Et si je pouvais être aimée sans devoir me suradapter ?",
        "Et si l’argent pouvait me donner plus de liberté et non plus de pression ?",
        "Et si ma douceur était une force qui attire le respect ?",
      ],
    },
    {
      title: "3. Intégrer les nouvelles croyances",
      lines: [
        "Je peux créer une vie où l’amour, la paix et l’abondance coexistent naturellement.",
        "Je suis soutenue dans ma croissance.",
        "Je mérite une maison, une famille, une œuvre et une vie qui me ressemblent.",
        "Je deviens une femme qui reçoit avec confiance et construit avec sérénité.",
        "Mon futur est un espace sûr pour mon cœur, mon corps et mes rêves.",
      ],
    },
  ];

  const ritual = [
    "Je respire profondément pendant 60 secondes.",
    "Je relis mon identité de Femme Sanctuaire.",
    "Je choisis trois affirmations à incarner aujourd’hui.",
    "Je visualise ma maison, mon amour, mon œuvre et ma liberté.",
    "Je pose une action concrète qui respecte mon énergie.",
  ];

  return (
    <main>
      <div className="container">
        <header className="hero">
          <p className="eyebrow">Dashboard public de vision</p>
          <h1>La Femme Sanctuaire</h1>
          <p className="heroText">
            Je construis une vie belle, paisible et profondément alignée, où l’amour,
            la liberté, la création, la sérénité, l’abondance et la transmission coexistent naturellement.
          </p>
        </header>

        <nav>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={activeSection === section.id ? "active" : ""}
            >
              {section.label}
            </button>
          ))}
        </nav>

        {activeSection === "vision" && (
          <section className="grid two">
            {visionImages.map((item, index) => (
              <article className="imageCard" key={index}>
                <img src={item.image} alt={item.title} />
                <div className="overlay">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <details>
                    <summary>Prompt image à générer</summary>
                    <p>{item.prompt}</p>
                  </details>
                </div>
              </article>
            ))}
          </section>
        )}

        {activeSection === "identity" && (
          <section className="panel">
            <p className="eyebrow">Identité idéale</p>
            <h2>La Femme Sanctuaire</h2>
            <div className="grid two">
              {identity.map((item, index) => (
                <div className="softBox" key={index}>✨ {item}</div>
              ))}
            </div>
          </section>
        )}

        {activeSection === "affirmations" && (
          <section className="panel">
            <p className="eyebrow">Reprogrammation</p>
            <h2>Mes phrases positives</h2>
            <div className="grid three">
              {affirmations.map((item, index) => (
                <button
                  key={index}
                  className={`affirmation ${checked[`a-${index}`] ? "selected" : ""}`}
                  onClick={() => setChecked({ ...checked, [`a-${index}`]: !checked[`a-${index}`] })}
                >
                  <span>{checked[`a-${index}`] ? "✓" : "🌿"}</span>
                  {item}
                </button>
              ))}
            </div>
          </section>
        )}

        {activeSection === "eft" && (
          <section className="stack">
            {eft.map((step, index) => (
              <article className="panel" key={index}>
                <h2>{step.title}</h2>
                <div className="stack small">
                  {step.lines.map((line, lineIndex) => (
                    <p className="softBox" key={lineIndex}>{line}</p>
                  ))}
                </div>
              </article>
            ))}
          </section>
        )}

        {activeSection === "ritual" && (
          <section className="grid two">
            <div className="panel">
              <p className="eyebrow">Rituel du matin</p>
              <h2>Me connecter à ma vision</h2>
              <div className="stack small">
                {ritual.map((item, index) => (
                  <label className="checkItem" key={index}>
                    <input
                      type="checkbox"
                      checked={!!checked[`r-${index}`]}
                      onChange={() => setChecked({ ...checked, [`r-${index}`]: !checked[`r-${index}`] })}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mantra">
              <p className="eyebrow">Mantra central</p>
              <h2>“Je transforme la vie en sanctuaire.”</h2>
              <p>Aujourd’hui, je choisis une action qui honore ma paix, mon amour, mon corps, mon œuvre et ma liberté.</p>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
