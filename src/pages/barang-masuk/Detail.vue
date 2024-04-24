<script></script>

<template>
  <div class="bg-white min-h-full p-4 mt-10 max-w-5xl space-y-10">
    <h1 class="text-center text-2xl font-bold">Informasi Barang Masuk</h1>
    <div class="grid grid-cols-4 gap-4">
      <ul class="space-y-2 font-semibold">
        <li>Inbound ID</li>
        <li>Tanggal dan Waktu</li>
      </ul>
      <ul class="space-y-2">
        <li>1231231</li>
        <li>24 Juni 2024</li>
      </ul>
      <ul class="space-y-2 font-semibold">
        <li>Reference Number</li>
        <li>Supplier ID</li>
        <li>Status</li>
      </ul>
      <ul class="space-y-2">
        <li>123123</li>
        <li>123123</li>
        <li>DONE QCs</li>
      </ul>
    </div>
    <div class="overflow-x-auto whitespace-nowrap">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>SKU</th>
            <th>Ukuran</th>
            <th>Berat</th>
            <th>Qty</th>
            <th>Zone</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr>
            <td>1</td>
            <td>Lemari 4 pintu</td>
            <td>LLC123</td>
            <td>60kcm x 20cm x 10cm</td>
            <td>21Kg</td>
            <td>3</td>
            <td>A01</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
