<template>
  <div class="container mx-auto px-4 py-16 max-w-4xl">
    <h1 class="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
      Conditions Générales de Vente
    </h1>

    <div class="prose prose-lg max-w-none space-y-8">
      <!-- Préambule -->
      <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
        <p class="mb-4 text-gray-900 dark:text-gray-100">
          Les présentes Conditions Générales de Vente (ci-après, « CGV ») régissent les relations contractuelles entre
          <strong>{{ appConfig.company.name }}</strong>, {{ appConfig.company.legalForm }}, immatriculée sous le n°
          Siret
          {{ appConfig.company.siret }} / {{ appConfig.company.nrt }}, dont le siège social est situé {{
            appConfig.company.address.full }}
          (ci-après, « la Société »), et toute personne (ci-après, « le Client ») souhaitant souscrire aux
          services
          proposés sur le site www.thefreecoaches.com ou par tout autre canal de communication.
        </p>
        <p
          class="text-sm bg-blue-50 dark:bg-blue-900/30 p-3 rounded border-l-4 border-blue-400 text-gray-900 dark:text-gray-100">
          <strong>Contact :</strong> Pour toute question, la Société est joignable à
          <a :href="`mailto:${appConfig.company.contact.email}`" class="text-primary hover:underline">{{
            appConfig.company.contact.email }}</a>
          ou par téléphone au <a :href="`tel:${appConfig.company.contact.phone}`"
            class="text-primary hover:underline">{{ appConfig.company.contact.phone }}</a>.
        </p>
      </div>

      <!-- Article 1 -->
      <section>
        <h2
          class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
          Article 1 : Objet
        </h2>
        <p class="text-gray-900 dark:text-gray-100">
          Les présentes CGV ont pour objet de définir les droits et obligations des parties dans le cadre de la vente
          de services d'accompagnement en ligne visant à aider les coachs sportifs à développer leur activité et leur
          présence digitale.
        </p>
      </section>

      <!-- Article 2 -->
      <section>
        <h2
          class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
          Article 2 : Acceptation des CGV
        </h2>
        <p class="mb-4 text-gray-900 dark:text-gray-100">
          La souscription à tout service implique l'acceptation pleine, entière et sans réserve des présentes CGV.
        </p>
        <p class="mb-3 text-gray-900 dark:text-gray-100"><strong>L'acceptation est réputée acquise :</strong></p>
        <ul class="list-disc pl-6 space-y-2 text-gray-900 dark:text-gray-100">
          <li>Dès la validation du premier paiement ou de la signature du devis ;</li>
          <li>Et automatiquement confirmée lors de la participation à l'appel d'intégration organisé dans le cadre de
            l'accompagnement.</li>
        </ul>
        <div class="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-400 mt-4">
          <p class="text-sm text-gray-900 dark:text-gray-100">
            En rejoignant cet appel d'intégration, le Client reconnaît avoir pris connaissance, compris et accepté les
            présentes CGV. Cette participation constitue le point de départ de l'exécution du contrat et fait courir le
            délai légal de rétractation, tel que défini à l'article 7.
          </p>
        </div>
        <p class="mt-4 text-gray-900 dark:text-gray-100">
          Les présentes CGV prévalent sur tout autre document du Client, y compris ses propres conditions générales
          d'achat.
        </p>
      </section>

      <!-- Article 3 -->
      <section>
        <h2
          class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
          Article 3 : Services proposés
        </h2>
        <p class="mb-3 text-gray-900 dark:text-gray-100">Les services proposés incluent :</p>
        <ul class="list-disc pl-6 space-y-2 text-gray-900 dark:text-gray-100">
          <li>Formations en ligne ;</li>
          <li>Stratégies de marketing digital ;</li>
          <li>Coaching personnalisé (individuel ou collectif) ;</li>
          <li>Accès à des outils, ressources et supports exclusifs.</li>
        </ul>
        <p class="mt-4 text-gray-900 dark:text-gray-100">
          Les caractéristiques essentielles sont décrites sur le site ou dans les propositions commerciales adressées au
          Client.
        </p>
      </section>

      <!-- Article 4 -->
      <section>
        <h2
          class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
          Article 4 : Modalités de commande
        </h2>
        <p class="mb-3 text-gray-900 dark:text-gray-100">Le Client peut contracter les services via :</p>
        <ul class="list-disc pl-6 space-y-2 text-gray-900 dark:text-gray-100">
          <li>Le site internet ;</li>
          <li>Ou par contact direct (e-mail ou téléphone).</li>
        </ul>
        <p class="mt-4 text-gray-900 dark:text-gray-100">
          Toute commande est validée par un devis signé ou un premier paiement, ce qui vaut acceptation contractuelle.
          La Société se réserve le droit de refuser une commande pour motif légitime (capacité, disponibilité,
          non-conformité, etc.).
        </p>
      </section>

      <!-- Article 5 -->
      <section>
        <h2
          class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
          Article 5 : Moyens de paiement
        </h2>
        <p class="mb-4 text-gray-900 dark:text-gray-100">
          Les transactions sont effectuées via <strong>{{ appConfig.company.technical.payment }}</strong>. Seules les
          cartes VISA et
          MASTERCARD sont acceptées.
        </p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
            <h4 class="font-semibold text-green-800 dark:text-green-300 mb-2">Paiement :</h4>
            <p class="text-sm text-gray-900 dark:text-gray-100">
              Par carte bancaire, virement ou tout moyen validé par la Société. Un échéancier peut être accordé.
            </p>
          </div>
          <div class="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg">
            <h4 class="font-semibold text-red-800 dark:text-red-300 mb-2">Impayés :</h4>
            <p class="text-sm text-gray-900 dark:text-gray-100">
              Tout défaut de paiement entraîne une suspension immédiate des services et l'application d'intérêts de
              retard de 10 % par mois.
            </p>
          </div>
        </div>
      </section>

      <!-- Article 6 -->
      <section>
        <h2
          class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
          Article 6 : Durée et résiliation
        </h2>
        <p class="mb-4 text-gray-900 dark:text-gray-100">
          Les contrats sont valables pour la durée précisée sur le devis ou l'offre commerciale.
        </p>
        <p class="mb-3 text-gray-900 dark:text-gray-100">La Société peut résilier sans préavis en cas de :</p>
        <ul class="list-disc pl-6 space-y-2 text-gray-900 dark:text-gray-100">
          <li>Défaut de paiement ;</li>
          <li>Manquement grave du Client (non-respect des règles de conduite, harcèlement, abus, etc.).</li>
        </ul>
        <p class="mt-4 font-semibold text-gray-900 dark:text-gray-100">
          Aucune indemnité ne sera due en cas de résiliation pour faute du Client.
        </p>
      </section>

      <!-- Article 7 -->
      <section>
        <h2
          class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
          Article 7 : Droit de rétractation
        </h2>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
          <p class="mb-4 text-gray-900 dark:text-gray-100">
            Conformément à l'article L221-18 du Code de la consommation, le Client consommateur (non professionnel)
            dispose d'un délai de <strong>14 jours</strong> pour exercer son droit de rétractation, à compter de la
            conclusion du contrat, laquelle intervient dès validation du premier paiement et participation à l'appel
            d'intégration.
          </p>

          <div class="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-orange-400">
            <h4 class="font-semibold text-orange-800 dark:text-orange-300 mb-2">Extinction du droit de rétractation :
            </h4>
            <p class="text-sm mb-3 text-gray-900 dark:text-gray-100">
              En vertu de l'article L221-28, 1° du Code de la consommation, ce droit s'éteint si l'exécution du service
              a commencé avec l'accord exprès du Client et que le Client a reconnu la perte de son droit de
              rétractation.
            </p>

            <p class="text-sm mb-2 text-gray-900 dark:text-gray-100"><strong>Dès lors que le Client :</strong></p>
            <ul class="list-disc pl-4 text-sm space-y-1 text-gray-900 dark:text-gray-100">
              <li>A participé à un premier coaching ;</li>
              <li>A accédé à la plateforme ou aux ressources ;</li>
              <li>A reçu un accompagnement (humain, technique ou pédagogique) ;</li>
            </ul>
            <p class="text-sm mt-2 text-gray-900 dark:text-gray-100">
              il est réputé avoir donné son accord exprès et renoncé à son droit de rétractation.
            </p>
          </div>

          <div class="bg-red-50 dark:bg-red-900/30 p-4 rounded mt-4 border-l-4 border-red-400">
            <p class="text-sm font-semibold text-red-800 dark:text-red-300">
              Passé le délai de 14 jours ou après démarrage du service, aucun remboursement, même partiel, ne sera
              accepté,
              même en cas de non-utilisation ultérieure du service.
            </p>
            <p class="text-sm mt-2 text-gray-900 dark:text-gray-100">
              Le Client reconnaît que son engagement implique une mobilisation immédiate de moyens humains, techniques
              et
              financiers non récupérables. Ces frais rendent tout remboursement incompatible avec l'exécution du
              contrat.
            </p>
          </div>
        </div>
      </section>

      <!-- Article 8 -->
      <section>
        <h2
          class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
          Article 8 : Responsabilité
        </h2>
        <p class="mb-4 text-gray-900 dark:text-gray-100">
          La Société s'engage à exécuter ses prestations avec sérieux et professionnalisme.
        </p>
        <p class="mb-3 text-gray-900 dark:text-gray-100">Elle ne saurait être tenue responsable :</p>
        <ul class="list-disc pl-6 space-y-2 text-gray-900 dark:text-gray-100">
          <li>En cas de mauvaise utilisation des services ;</li>
          <li>De dommages indirects (perte de chiffre d'affaires, réputation, etc.).</li>
        </ul>
        <p class="mt-4 font-semibold text-gray-900 dark:text-gray-100">
          La responsabilité de la Société est strictement limitée au montant effectivement payé pour le service
          concerné.
        </p>
      </section>

      <!-- Article 9 -->
      <section>
        <h2
          class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
          Article 9 : Propriété intellectuelle et confidentialité
        </h2>
        <p class="mb-4 text-gray-900 dark:text-gray-100">
          Tous les supports, outils, ressources ou contenus fournis dans le cadre de l'accompagnement sont la propriété
          exclusive de la Société. <strong>Toute reproduction, diffusion ou revente est formellement interdite.</strong>
        </p>
        <p class="text-gray-900 dark:text-gray-100">
          La Société s'engage à préserver la confidentialité des informations échangées avec le Client.
        </p>
      </section>

      <!-- Article 10 -->
      <section>
        <h2
          class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
          Article 10 : Données personnelles
        </h2>
        <p class="text-gray-900 dark:text-gray-100">
          Les données sont traitées conformément au Règlement Général sur la Protection des Données (RGPD).
          Le Client peut adresser toute demande à
          <a :href="`mailto:${appConfig.company.contact.dpo}`" class="text-primary hover:underline">{{
            appConfig.company.contact.dpo }}</a>.
        </p>
      </section>

      <!-- Article 11 -->
      <section>
        <h2
          class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
          Article 11 : Force majeure
        </h2>
        <p class="text-gray-900 dark:text-gray-100">
          La Société ne pourra être tenue responsable d'un retard ou manquement dû à un cas de force majeure
          (catastrophe naturelle, grève, crise sanitaire, etc.).
        </p>
      </section>

      <!-- Article 12 -->
      <section>
        <h2
          class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
          Article 12 : Litiges
        </h2>
        <p class="mb-4 text-gray-900 dark:text-gray-100">
          En cas de différend, les parties s'engagent à tenter une résolution amiable.
        </p>
        <p class="text-gray-900 dark:text-gray-100">
          À défaut, le tribunal compétent sera celui du siège de la Société, et le droit de {{
            appConfig.company.legal.jurisdiction }} s'appliquera à toute
          procédure.
        </p>
      </section>
    </div>

    <!-- Date de dernière mise à jour -->
    <div
      class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>Dernière mise à jour : {{ new Date().toLocaleDateString('fr-FR') }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig()

// Métadonnées SEO pour la page CGV
useHead({
  title: 'Conditions Générales de Vente - The Free Coaches',
  meta: [
    {
      name: 'description',
      content: 'Consultez les conditions générales de vente de The Free Coaches pour nos services d\'accompagnement des coachs sportifs.'
    }
  ]
})
</script>

<style scoped>
/* Styles gérés par les classes Tailwind directement dans le template */
</style>