function Person({ name, role, img, children }) {
  return (
    <div className="bg-card">
      <img
        src={img || "/placeholder.svg"}
        alt={`${name} – ${role}`}
        className="w-full h-78 object-cover"
      />
      <div className="pt-4">
        <h4 className="font-light text-center text-2xl">{name}</h4>
        <p className="text-bse font-bold text-center text-muted-foreground mb-6">{role}</p>
        <p className="text-muted-foreground text-center leading-relaxed font-light text-lg">{children}</p>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
      <Person name="Christian Herzog" role="Finanzberater" img="/image (1).png">
        Christian Herzog unterstützt Sie bei Ihren Finanzzielen mit Fachwissen und maßgeschneiderten Lösungen. Wir stehen Ihnen immer zur Seite.
      </Person>
      <Person name="Volker Hartmund" role="Investmentexperte" img="/image (2).png">
        Volker Hartmund analysiert Märkte und Chancen, um die besten Investitionsstrategien für unsere Kunden zu entwickeln. Gemeinsam erreichen wir finanzielle Ziele.
      </Person>
      <Person name="Christiane Schneider" role="Sekretärin" img="/image.jpg">
        Christiane Schneider bewertet Risiken und erstellt Absicherungsstrategien, um Ihre finanzielle Sicherheit zu gewährleisten. Vertrauen Sie auf unsere Expertise.
      </Person>
    </div>
  )
}
