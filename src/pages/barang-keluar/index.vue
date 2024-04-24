<template>
  <div class="bg-white min-h-full md:px-9">
    <label for="my-drawer-2" class="btn btn-primary drawer-button md:hidden">Open drawer</label>
    <div class="mt-3 md:mt-[70px] md:mb-[26px]">
      <button class="btn btn-secondary px-8 py-4">Barang Keluar Baru +</button>
    </div>
    <h1 class="text-3xl font-normal">Permintaan Pengiriman (Barang Keluar)</h1>
    <div class="flex py-4 gap-4">
      <div class="flex flex-col">
        <select class="select select-bordered w-full max-w-xs mb-4">
          <option disabled selected>Search By</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <select class="select select-bordered w-full max-w-xs">
          <option disabled selected>Filter Status</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Search Here"
        class="appearance-none h-12 px-4 text-sm border border-gray-300 rounded w-full max-w-screen-md"
      />
      <button class="btn w-32 bg-green-500 text-stone-100">Search</button>
    </div>
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>No</th>
            <th>Tanggal Waktu</th>
            <th>Outbound ID</th>
            <th>Source</th>
            <th>Customer ID</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr>
            <th>1</th>
            <td>12-03-2024 14:30</td>
            <td>IB0001232131</td>
            <td>Marketplace</td>
            <td>00023</td>
            <td>
              <div class="badge bg-[#FDFDEC] text-[#787303]">
                <svg
                  class="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                >
                  <circle cx="4.69423" cy="4.81056" r="2.88478" fill="#BA9F14" />
                </svg>
                Ready to Pick
              </div>
            </td>
            <td><button class="btn btn-xs btn-outline font-medium">Details</button></td>
          </tr>
          <!-- row 2 -->
          <tr>
            <th>1</th>
            <td>12-03-2024 14:30</td>
            <td>IB0001232131</td>
            <td>Marketplace</td>
            <td>00023</td>
            <td>
              <div class="badge bg-[#ECF1FD] text-[#032478]">
                <svg
                  class="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                >
                  <circle cx="4.69423" cy="4.81056" r="2.88478" fill="#1425BA" />
                </svg>
                On Delivery
              </div>
            </td>
            <td><button class="btn btn-xs btn-outline font-medium">Details</button></td>
          </tr>
          <!-- row 3 -->
          <tr>
            <th>1</th>
            <td>12-03-2024 14:30</td>
            <td>IB0001232131</td>
            <td>Marketplace</td>
            <td>00023</td>
            <td>
              <div class="badge bg-[#EEFDEC] text-[#17BA14]">
                <svg
                  class="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                >
                  <circle cx="4.69423" cy="4.81056" r="2.88478" fill="#137803" />
                </svg>
                Delivered
              </div>
            </td>
            <td><button class="btn btn-xs btn-outline font-medium">Details</button></td>
          </tr>
          <!-- row 4 -->
          <tr>
            <th>1</th>
            <td>12-03-2024 14:30</td>
            <td>IB0001232131</td>
            <td>Marketplace</td>
            <td>00023</td>
            <td>
              <div class="badge bg-[#FFD7D7] text-[#D62424]">
                <svg
                  class="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                >
                  <circle cx="4.69423" cy="4.81056" r="2.88478" fill="#D62424" />
                </svg>
                In Review
              </div>
            </td>
            <td><button class="btn btn-xs btn-outline font-medium">Details</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {}
</script>
