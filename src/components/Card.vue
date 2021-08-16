<template>
  <div class="card">
      <div class="card-header card-row card-padding">
          <div class="card-logo">
              <img src="" width="20px" height="20px"/>
          </div>
          <div class="card-title">This is a card</div>
          <div class="card-header-actions">
              <button>Action</button>
          </div>
      </div>
      <div class="card-body card-padding">
          This is the card content
      </div>
      <div class="card-footer card-padding">
          <div class="card-footer-actions card-row">
              <button>Action 1</button>
              <button>Action 2</button>
              <button>Action 3</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Card',
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
