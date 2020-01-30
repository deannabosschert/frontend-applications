<template>
  <div :id="category">
    <h2>{{ title }}</h2>
    <h2>{{ query }}</h2>

    <div class="content">
      <a v-for="(result, index) in results" :key="index" :href="result.url">
        <section>
          <h3>{{ result.title.value }}</h3>
          <p>&#x25bc; {{ result.location.value }}</p>
          <img
            class="images"
            v-bind:src="result.img.value"
            alt="result.title.value"
          />
        </section>
      </a>
    </div>
  </div>
</template>

<script>
/*eslint 'no-console':0*/
import queries from "@/components/queries.js";
export default {
  name: "category",
  data() {
    return {
      results: []
    };
  },
  props: {
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    query: {
      type: JSON,
      required: true
    }
  },
  mounted() {
    this.loadData(endpoint, queries.negatieven);
  },
  methods: {
    loadData(endpoint, query) {
      const querySource_ID =
        endpoint + "?query=" + encodeURIComponent(query) + "&format=json";
      fetch(querySource_ID)
        .then(res => res.json())
        .then(json => {
          this.results = json.results.bindings;
          const rawData = this.results;
          const results = prettifyArray(rawData);
          console.log(results);
        });

      function prettifyArray(array) {
        return array.map(results => {
          return {
            title: results.title.value,
            location: results.location.value,
            type: results.type.value,
            img: results.img.value
          };
        });
      }
    }
  }
};
</script>

<style></style>
