<template>
  <div class="bg-white min-h-full p-4 mt-10 max-w-5xl space-y-4">
    <a href="/barang-masuk/new">
      <button class="btn btn-md btn-secondary">Penerimaan barang baru</button></a
    >
    <h1 class="text-4xl font-bold">Barang Masuk</h1>
    <div class="flex space-x-4">
      <select name="search-by" class="select select-bordered">
        <option selected value="" disabled>Search By</option>
        <option value="value1">value1</option>
      </select>
      <input type="text" class="w-full input input-bordered" placeholder="Search..." />
      <button class="btn btn-secondary">Search</button>
    </div>
    <select name="Filter-by" class="select select-bordered">
      <option selected value="" disabled>Filter By</option>
      <option value="value1">value1</option>
    </select>
    <div class="overflow-x-auto whitespace-nowrap">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>No</th>
            <th>Tanggal dan Waktu</th>
            <th>Inbound ID</th>
            <th>Reference Number</th>
            <th>Supplier ID</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr>
            <td>1</td>
            <td>2024-04-16 10:00 AM</td>
            <td>IB123456</td>
            <td>REF7890</td>
            <td>SUP001</td>
            <td>DONE QC</td>
            <td>
              <a href="/barang-masuk/detail?id=1">
                <button class="btn btn-bordered btn-sm">Detail</button></a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
