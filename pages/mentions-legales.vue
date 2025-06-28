<template>
  <div class="container mx-auto px-4 py-16 max-w-4xl">
    <h1 class="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
      Mentions Légales
    </h1>

    <div class="prose prose-lg max-w-none space-y-8">
      <!-- Section 1 -->
      <section>
        <h2
          class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
          1. Identification de l'entreprise
        </h2>
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <ul class="space-y-3 text-gray-900 dark:text-gray-100">
            <li><strong>Dénomination sociale :</strong> {{ appConfig.company.name }}</li>
            <li><strong>Forme juridique :</strong> {{ appConfig.company.legalForm }}</li>
            <li><strong>Siège social :</strong> {{ appConfig.company.address.full }}</li>
            <li><strong>Numéro de Siret :</strong> {{ appConfig.company.siret }}</li>
            <li><strong>Adresse e-mail : </strong>
              <a :href="`mailto:${appConfig.company.contact.email}`" class="text-primary hover:underline">{{
                appConfig.company.contact.email }}</a>
            </li>
            <li><strong>Téléphone : </strong>
              <a :href="`tel:${appConfig.company.contact.phone}`" class="text-primary hover:underline">{{
                appConfig.company.contact.phone }}</a>
            </li>
          </ul>
        </div>
      </section>

      <!-- Section 2 -->
      <section>
        <h2
          class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
          2. Hébergement du site internet
        </h2>
        <p class="text-gray-900 dark:text-gray-100">
          Le site internet est hébergé par :
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-400 mt-3">
          <p class="text-gray-900 dark:text-gray-100">
            <strong>Nom de l'hébergeur :</strong> {{ appConfig.company.technical.hosting }}
          </p>
        </div>
      </section>

      <!-- Section 3 -->
      <section>
        <h2
          class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
          3. Activité
        </h2>
        <p class="text-gray-900 dark:text-gray-100">
          {{ appConfig.company.name }} propose un service d'accompagnement en ligne destiné aux coachs sportifs afin de
          les aider à
          développer leur présence sur Internet et à optimiser leur activité professionnelle.
        </p>
      </section>

      <!-- Section 4 -->
      <section>
        <h2
          class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
          4. Propriété intellectuelle
        </h2>
        <p class="mb-4 text-gray-900 dark:text-gray-100">
          Le contenu du site internet (textes, images, vidéos, logos, etc.) est la propriété exclusive de
          <strong>{{ appConfig.company.name }}</strong>, sauf mention contraire.
        </p>
        <div class="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border-l-4 border-red-400">
          <p class="text-sm font-semibold text-red-800 dark:text-red-300">
            Toute reproduction, représentation, modification ou exploitation partielle ou totale de ces contenus
            est strictement interdite sans autorisation écrite préalable.
          </p>
        </div>
      </section>

      <!-- Section 5 -->
      <section>
        <h2
          class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
          5. Protection des données personnelles
        </h2>
        <div class="space-y-4">
          <p class="text-gray-900 dark:text-gray-100">
            Conformément aux lois en vigueur, notamment le <strong>Règlement Général sur la Protection des Données
              (RGPD)</strong>,
            {{ appConfig.company.name }} s'engage à protéger les données personnelles des utilisateurs.
          </p>
          <p class="text-gray-900 dark:text-gray-100">
            Les informations collectées via le site sont utilisées uniquement dans le cadre des services proposés.
          </p>
          <div class="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
            <p class="text-sm text-gray-900 dark:text-gray-100">
              <strong>Exercice de vos droits :</strong> Pour toute question relative aux données personnelles ou pour
              exercer vos droits d'accès, de rectification ou de suppression, vous pouvez nous contacter à l'adresse
              suivante :
              <a :href="`mailto:${appConfig.company.contact.email}`" class="text-primary hover:underline">{{
                appConfig.company.contact.email }}</a>
            </p>
          </div>
        </div>
      </section>

      <!-- Section 6 -->
      <section>
        <h2
          class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
          6. Responsabilité
        </h2>
        <div class="space-y-4">
          <p class="text-gray-900 dark:text-gray-100">
            {{ appConfig.company.name }} s'efforce d'assurer la fiabilité des informations présentes sur le site.
            Toutefois,
            l'entreprise ne saurait être tenue responsable d'éventuelles erreurs, omissions ou d'un mauvais usage
            des informations disponibles.
          </p>
          <div class="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-400">
            <p class="text-sm text-gray-900 dark:text-gray-100">
              <strong>Responsabilité de l'utilisateur :</strong> Les utilisateurs sont responsables de leur équipement
              et de leur connexion Internet lors de l'accès au site.
            </p>
          </div>
        </div>
      </section>

      <!-- Section 7 -->
      <section>
        <h2
          class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
          7. Loi applicable et juridiction compétente
        </h2>
        <div class="space-y-4">
          <p class="text-gray-900 dark:text-gray-100">
            Les présentes mentions légales sont régies par les <strong>{{ appConfig.company.legal.applicableLaw
              }}</strong>.
          </p>
          <p class="text-gray-900 dark:text-gray-100">
            En cas de litige, les tribunaux compétents seront ceux du siège social de {{ appConfig.company.name }},
            sauf disposition légale contraire.
          </p>
        </div>
      </section>

      <!-- Section 8 -->
      <section>
        <h2
          class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
          8. Contact
        </h2>
        <p class="mb-4 text-gray-900 dark:text-gray-100">
          Pour toute question ou information concernant le site ou nos services, vous pouvez nous contacter :
        </p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-primary/10 p-4 rounded-lg">
            <h4 class="font-semibold text-primary mb-2">Par e-mail :</h4>
            <a :href="`mailto:${appConfig.company.contact.email}`" class="text-primary hover:underline">
              {{ appConfig.company.contact.email }}
            </a>
          </div>
          <div class="bg-primary/10 p-4 rounded-lg">
            <h4 class="font-semibold text-primary mb-2">Par téléphone :</h4>
            <a :href="`tel:${appConfig.company.contact.phone}`" class="text-primary hover:underline">
              {{ appConfig.company.contact.phone }}
            </a>
          </div>
        </div>
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

// Métadonnées SEO pour la page mentions légales
useHead({
  title: 'Mentions Légales - The Free Coaches',
  meta: [
    {
      name: 'description',
      content: 'Consultez les mentions légales de The Free Coaches. Informations sur l\'entreprise, hébergement, propriété intellectuelle et protection des données.'
    }
  ]
})
</script>

<style scoped>
/* Styles gérés par les classes Tailwind directement dans le template */
</style>