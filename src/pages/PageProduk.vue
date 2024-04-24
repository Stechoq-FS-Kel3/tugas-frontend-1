<script setup></script>

<template>
  <div>
    <h1 class="text-4xl font-bold ml-4 mb-3 mt-3">Produk Page</h1>
  </div>

  <div class="container flex justify-between">
    <div class="flex space-x-5">
      <div
        class="container1 w-72 h-48 bg-yellow-500 flex flex-col justify-center items-center text-left text-4xl font-bold rounded-lg -mt-0 -mr--10 -ml-20"
      >
        <div class="number text-6xl font-bold">100</div>
        <div class="text1 text-lg mt-4 font-light">Stok Barang Tersedia</div>
      </div>

      <div
        class="container2 w-72 h-48 bg-yellow-500 flex flex-col justify-center items-center text-left text-5xl font-bold rounded-lg mt-0"
      >
        <div class="number text-6xl font-bold">10</div>
        <div class="text2 text-lg mt-3 font-light">Stok Barang Hampir Habis</div>
      </div>

      <div
        class="container3 w-72 h-200 bg-yellow-500 flex flex-col justify-center items-center text-left text-6xl font-bold rounded-lg mr-0 mt--5"
      >
        <div class="number text-6xl font-bold">1</div>
        <div class="text3 text-lg mt-1 font-light">Stok Barang Habis</div>
      </div>
    </div>
  </div>

  <select class="inline-flex cursor-pointer select select-bordered w-1/6 max-w-xs h-12 mt-4 ml-4">
    <option disabled selected>Search By</option>
    <option>Han Solo</option>
    <option>Greedo</option>
  </select>

  <input
    type="text"
    placeholder="Type here"
    class="appearance-none h-12 px-4 text-sm ml-4 mt-3 border border-gray-300 rounded w-full max-w-screen-md"
  />

  <button class="btn ml-4 mt-2.5 w-32 bg-green-500 text-stone-100">Button</button>

  <br />
  <select class="inline-flex cursor-pointer select select-bordered w-1/6 max-w-xs h-12 mt-0 ml-4">
    <option disabled selected>Filter Status</option>
    <option>Han Solo</option>
    <option>Greedo</option>
  </select>

  <div class="overflow-x-auto">
    <table class="table table-xs ml-3 mt-4">
      <thead>
        <tr>
          <th></th>
          <th>Nama Barang</th>
          <th>SKU</th>
          <th>Ukuran</th>
          <th>Berat</th>
          <th>City</th>
          <th>Zone</th>
          <th>Stok</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Littel, Schaden and Vandervort</td>
          <td>Canada</td>
          <td>12/16/2020</td>
          <td>Blue</td>
          <td>
            <span
              class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-800 text-green-100 dark:bg-green-500/30 dark:text-green-500"
            >
              <span
                class="size-1.5 inline-block rounded-full bg-green-800 dark:bg-green-500"
              ></span>
              Badge
            </span>
          </td>
          <td>
            <div class="badge badge-outline">default</div>
          </td>
        </tr>
        <tr>
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Zemlak, Daniel and Leannon</td>
          <td>United States</td>
          <td>12/5/2020</td>
          <td>Purple</td>
          <td>
            <span
              class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-800 text-green-100 dark:bg-green-500/30 dark:text-green-500"
            >
              <span
                class="size-1.5 inline-block rounded-full bg-green-800 dark:bg-green-500"
              ></span>
              Badge
            </span>
          </td>
          <td>
            <div class="badge badge-outline">default</div>
          </td>
        </tr>
        <tr>
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Carroll Group</td>
          <td>China</td>
          <td>8/15/2020</td>
          <td>Red</td>
          <td>
            <span
              class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-800 text-green-100 dark:bg-green-500/30 dark:text-green-500"
            >
              <span
                class="size-1.5 inline-block rounded-full bg-green-800 dark:bg-green-500"
              ></span>
              Badge
            </span>
          </td>
          <td>
            <div class="badge badge-outline">default</div>
          </td>
        </tr>
        <tr>
          <th>4</th>
          <td>Marjy Ferencz</td>
          <td>Office Assistant I</td>
          <td>Rowe-Schoen</td>
          <td>Russia</td>
          <td>3/25/2021</td>
          <td>Crimson</td>
          <td>
            <span
              class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-800 text-green-100 dark:bg-green-500/30 dark:text-green-500"
            >
              <span
                class="size-1.5 inline-block rounded-full bg-green-800 dark:bg-green-500"
              ></span>
              Badge
            </span>
          </td>
          <td>
            <div class="badge badge-outline">default</div>
          </td>
        </tr>
        <tr>
          <th>5</th>
          <td>Yancy Tear</td>
          <td>Community Outreach Specialist</td>
          <td>Wyman-Ledner</td>
          <td>Brazil</td>
          <td>5/22/2020</td>
          <td>Indigo</td>
          <td>
            <span
              class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-800 text-green-100 dark:bg-green-500/30 dark:text-green-500"
            >
              <span
                class="size-1.5 inline-block rounded-full bg-green-800 dark:bg-green-500"
              ></span>
              Badge
            </span>
          </td>
          <td>
            <div class="badge badge-outline">default</div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th>Nama Barang</th>
          <th>SKU</th>
          <th>Ukuran</th>
          <th>Berat</th>
          <th>City</th>
          <th>Zone</th>
          <th>Stok</th>
          <th>Action</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
</script>
