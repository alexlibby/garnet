<script>
  // placeholder - value not used
  let notifications = 1;

  function addNotification() {
    const prevNum = Number(document.querySelector(".countNum").innerText);
    notifications = prevNum + 1
    document.querySelector(".countNum").textContent = notifications;
  }
</script>

<p>Press button to increase the notification count:</p>
<button on:click={addNotification}>➕</button>
<button on:click={() => notifications = 0}>Reset</button>

<div>
  <slot />
</div>

