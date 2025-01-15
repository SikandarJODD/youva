<script>
  import Button from "../ui/button/button.svelte";

  let { children } = $props();
  let isMobileMenu = $state(false);
</script>

<div>
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
  <div
    class={[
      "relative z-50 lg:hidden transition-opacity ease-linear duration-300",
      isMobileMenu ? "opacity-100" : "opacity-0",
    ]}
    role="dialog"
    aria-modal="true"
  >
    <div
      class={[
        "fixed inset-0 bg-gray-900/80 ",
        isMobileMenu ? "translate-x-0" : "-translate-x-full",
      ]}
      aria-hidden="true"
    ></div>

    <div
      class={[
        "fixed inset-0 flex transition ease-in-out duration-300 transform",
        isMobileMenu ? "translate-x-0" : "-translate-x-full",
      ]}
    >
      <div
        class={[
          "relative mr-16 flex w-full max-w-xs flex-1 ease-in-out duration-300",
          isMobileMenu ? "opacity-100" : "opacity-0",
        ]}
      >
        <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
          <Button
            size="icon"
            variant="outline"
            onclick={() => (isMobileMenu = false)}
            class="-ml-4 bg-transparent text-primary-foreground border-none"
          >
            <span class="sr-only">Close sidebar</span>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>

        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div
          class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2"
        >
          <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" class="-mx-2 space-y-1">
                  <li>
                    <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
                    <a
                      href="#"
                      class="group flex gap-x-3 rounded-md bg-gray-50 p-2 text-sm/6 font-semibold text-indigo-600"
                    >
                      <svg
                        class="size-6 shrink-0 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                      Dashboard
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <!-- Static sidebar for desktop -->
  <div
    class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col mt-[65px]"
  >
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div
      class="flex grow flex-col gap-y-5 overflow-y-auto border-r bg-background px-6"
    >
      <nav class="flex flex-1 flex-col">
        <ul role="list" class="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" class="-mx-2 space-y-1">
              <!-- <li>
                Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                <a
                  href="#"
                  class="group flex gap-x-3 rounded-md bg-gray-50 p-2 text-sm/6 font-semibold text-indigo-600"
                >
                  <svg
                    class="size-6 shrink-0 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Dashboard
                </a>
              </li> -->
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <div
    class="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden"
  >
    <div class="flex-1 text-sm/6 font-semibold text-gray-900">Filters</div>
    <Button
      size="icon"
      variant="ghost"
      class="-m-2.5 p-2.5  lg:hidden bg-transparent text-primary"
      onclick={() => (isMobileMenu = true)}
    >
      <span class="sr-only">Open sidebar</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-menu"
        ><line x1="4" x2="20" y1="12" y2="12" /><line
          x1="4"
          x2="20"
          y1="6"
          y2="6"
        /><line x1="4" x2="20" y1="18" y2="18" /></svg
      >
    </Button>
  </div>

  <main class="py-10 lg:py-4 lg:pl-64">
    <div class="px-4 sm:px-4 lg:px-6">
      {@render children()}
    </div>
  </main>
</div>
