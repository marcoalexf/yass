<template>
  <div class="card">
      <div class="card-header card-row card-padding">
          <div class="card-title">
              {{this.currentOption.name}}
          </div>
      </div>
      <div class="card-body card-padding">
          Price: {{this.currentOption.price}}
          Time to : {{this.currentOption.timeTo}}
      </div>
      <div class="card-footer card-padding">
          <div class="card-footer-actions card-row">
              <button>Open in Maps</button>
              <button>See website</button>
              <button>Save for later</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['currentOption'],
};
</script>

<style>
.card {
    background: #fff;
    border-radius: 2px;
    margin: 1rem;
    position: relative;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.card-header {
    display: flex;
}

.card-header {
    padding: .5rem;
}

.card-row > * {
    margin: .5rem 0 .5rem 0;
    flex-grow: 1;
}
</style>
