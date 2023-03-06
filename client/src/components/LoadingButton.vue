<script>
export default {
  name: 'LoadingButton'
}
</script>

<template>
  <div class="text-center mt-3 mb-3">
    <button class="btn btn-dark" type="button" disabled>
      <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
      Loading...
    </button>
  </div>
</template>
