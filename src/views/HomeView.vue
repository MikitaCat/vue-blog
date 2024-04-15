<script setup>

</script>

<template>
  <div class="wrapper">
    <div class="header">
      <span>Written by Author Name on Some Date</span>
      <div>
        <button class="del material-icons">delete</button>
        <button class="save material-icons">
          bookmark_border
        </button>
      </div>
    </div>
    <h1>Post Title</h1>
    <p>Post Body</p>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  margin: 2rem;
  background: #fff;
  margin-bottom: 2rem;
  border-radius: 1rem;
  overflow: hidden;

  .header {
    font-size: 12px;
    background: #0284c7;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-weight: 300;

    button {
      border-radius: 30px;
    }

    div .del {
      font-size: 20px;
      padding: 3px;
      background: #fff;
      color: #ef4444;
    }

    div .save {
      font-size: 20px;
      padding: 3px;
      background: #fff;
      color: #22c55e;
      margin-left: 10px;
    }
  }

  h1 {
    padding: 1rem;
  }

  p {
    padding: 0 1rem 1rem;
    font-weight: 300;
  }
}
</style>
