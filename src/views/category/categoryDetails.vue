<template>
  <div class="w-full lg:ps-64">
    <div class="page-content space-y-6 p-6">
      <div class="flex w-full items-center justify-between">
        <h4 class="text-xl font-medium">User Details</h4>
        <ol
          aria-label="Breadcrumb"
          class="hidden min-w-0 items-center gap-2 whitespace-nowrap md:flex"
        >
          <li class="text-sm">
            <a
              class="flex items-center gap-2 align-middle text-default-800 transition-all hover:text-primary-500"
              href="/yum_b/admin/customers"
              >User<svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m9 18 6-6-6-6"></path></svg
            ></a>
          </li>
          <li aria-current="page" class="truncate text-sm font-medium">
            User Details
          </li>
        </ol>
      </div>
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div class="lg:col-span-1">
          <div class="rounded-lg border border-default-200 p-6">
            <img
              src="data:image/jpeg;base64,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"
              width="96"
              height="96"
              class="w-24 rounded-full border border-gray-200 bg-gray-100 p-1 dark:border-gray-600 dark:bg-gray-700"
              alt="avatar"
            />
            <h4 class="mb-1 mt-3 text-lg">{{ singleUserLocal?.fullName }}</h4>
            <div class="mt-6 text-start">
              <h4 class="mb-2.5 text-sm uppercase">About Me :</h4>
              <p class="mb-6 text-gray-400">
                Hi I'm Kaiya Botosh,has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type.
              </p>
              <p class="mb-3 text-zinc-400">
                <b>Full Name :</b>
                <span class="ms-2">{{ singleUserLocal?.fullName }}</span>
              </p>
              <p class="mb-3 text-zinc-400">
                <b>Mobile :</b><span class="ms-2">1078832848</span>
              </p>
              <p class="mb-3 text-zinc-400">
                <b>Email :</b>
                <span class="ms-2">{{ singleUserLocal?.email }}</span>
              </p>
              <p class="mb-3 text-zinc-400">
                <b>Role :</b>
                <span class="ms-2">{{ singleUserLocal?.role }}</span>
              </p>
              <p
                class="mb-3 text-zinc-400"
                v-if="singleUser?.data.associatedRestaurant"
              >
                <b>Associated Restaurant :</b>
                <span class="ms-2">{{ singleRest?.data.name }}</span>
              </p>
              <p class="mb-1.5 text-zinc-400">
                <b>Location :</b> <span class="ms-2">Mae Lan</span>
              </p>
            </div>
          </div>
        </div>
        <div class="lg:col-span-2">
          <div class="rounded-lg border border-default-200">
            <div class="overflow-hidden p-6">
              <div
                class="flex flex-wrap items-center gap-4 sm:justify-between lg:flex-nowrap"
              >
                <h2 class="text-xl font-semibold text-default-800">
                  Customer Order history
                </h2>
                <div class="hs-dropdown relative inline-flex">
                  <div
                    class="max-w-sm mx-auto hs-dropdown-toggle flex items-center gap-2 rounded-md px-4 py-3 text-sm font-medium text-default-700 transition-all xl:px-8"
                  >
                    <select
                      id="selecting"
                      class="bg-[#F1F5F9] outlined-none border-none text-black text-sm rounded block px-4 py-3"
                    >
                      <option selected>Sort: Ascending</option>
                      <option value="US">Decending</option>
                    </select>
                  </div>
                </div>
                <div class="hs-dropdown relative inline-flex">
                  <div
                    class="max-w-sm mx-auto hs-dropdown-toggle flex items-center gap-2 rounded-md px-4 py-3 text-sm font-medium text-default-700 transition-all xl:px-8"
                  >
                    <select
                      id="selecting"
                      class="bg-[#F1F5F9] outlined-none border-none text-black text-sm rounded block px-5 py-3"
                    >
                      <option selected>Sort: Ascending</option>
                      <option value="Paid">Paid</option>
                      <option value="Unpaid">Unpaid</option>
                      <option value="Canceled">Canceled</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative overflow-x-auto">
            <div class="inline-block min-w-full align-middle">
              <div class="overflow-hidden">
                <table class="w-full divide-y divide-default-200">
                  <thead class="bg-default-100">
                    <tr class="text-start">
                      <th
                        class="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800"
                      >
                        User Name
                      </th>
                      <th
                        class="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800"
                      >
                        Order ID
                      </th>
                      <th
                        class="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800"
                      >
                        Dish
                      </th>
                      <th
                        class="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800"
                      >
                        Amount
                      </th>
                      <th
                        class="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800"
                      >
                        Role
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-default-200">
                    <tr>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        Imly2311
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500 hover:text-primary-500"
                      >
                        <a href="/yum_b/admin/orders/c0e4f7">#C0E4F7</a>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-800"
                      >
                        <div class="flex items-center gap-4">
                          <div class="shrink">
                            <div class="h-18 w-18">
                              <img
                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAxAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAEIQAAIBAgQDBQQGCQQCAgMAAAECAwQRAAUSIRMxQQYiUWFxFDKBkVJikqHR8BUjQlOCk7HB4SQzcvEWQ6KjNFRj/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECBAMF/8QALhEAAgEDAwMDAgUFAAAAAAAAAAECAxESBBMhMUFRBSIyFGEzQlKx8BVxgZGh/9oADAMBAAIRAxEAPwA6aRk92oibyW/4Yjalcm504siHDuD9XHuZ2PKxKPs+F7Pi/wAHDhD9XBuCwRQEGHiDF8Qr9HDhB9XCdQNsH8DHRBgiKfDhTYncK2wcIMO9nwSWkx32X62DdHtg32fHRBgh7PhCHC3QVMocHC4GCHBw4Q4NweAOWl1dLeZvhNTaMFBF9XHeB9XCVUNsDGHHRDgv7Ph4p8PdDbBCwYeIF+jgrwFxzgrhbw8AWYV+tiMw4McFfo4XBXC3R4Afg44Yfq4M+zrhezrh7obQE4OFg17P9XHcG8G0VgMdCt0xZEa/WX5b47wvqtjPuHTBlYLjvD+riyI8OCYMx4MqrH9XEgj+riwq74dpwswwKwTDljbFgLhwXCzHgVtO+OlMWQmE0e2FmPEraMd4eLAjw7h4MwxK3CbCCsMWuFjvC/Jwsx4lUBsd0ti0I8PXUqlVZrHngzDEqKmHFfo7HxxYEWFwsLMeBFHA8ikhbgczhhjsbYs8PC4eDIMCtw8Lh4tqF+jh3d+jgzDEpcPHOHi4UwuHgzHiU9GFi5owsGYsSiNK76l+0MImP94v2hjzBamVUJHEIANxpF/X0x0VrP7vEv8A8Rjmml3OuLPTNUX72P7Qx0PF+9j+0MeZe1uTZ2bb4fcMO9pAGoSvYDvMU9354eUfIsWemh4v3sf2hjuuL97H9oY82SdHOuOsVkPImNt/u9cSl4FZS1cjC4F0if8ADBkgxZ6NxIv3sf2xjvFi/fx/zBjzkzU4Ma+3bE2vwNlA68t8OaupoywatsxB73sygeu4J3wskPE9F4sX7+P+YMd40X7+P7Yx52cxRFaxia4O5p1uefT++HnMo9Kf7eq29qRQbcut74lyHieg8WL9/F9sY7xYrf78f2xjzk16OwsLLp7p0KNR+C4YK0HT39S6iBYAb/LBkgxPSDPF+/j+2McNTB+/j/mDHnck9IgjEsczuR3iH02+WHxyZEFR3WqP0gjEN1tvfx/O2LWPciV0eg+0wfv4/wCYPxwvaoP38f8AMGMLr7Mpr101VfeweU77+TenzwjLkC6dOUu4c93VWLv/APbi1GD7k3l4N37ZB+/j/mD8cdFVB+/j/mDGXo8tyqdCWysRW8Zg1/TS5xP+h8tXdMvT4M344eEfIspeDQ+10y78eP8AmD8cI1tL/wDsw/zF/HAWGgpYlulBGv8AAThGCm60yfYwbaDNhxamncd2WI+eoYdx4htxY/tDALRAnKlX7GO3iXfgquHtoM2HuPF+9T7Qx3ip9NftDAATRY4wgf8AZ1fw/wCMLbDM0HEX6S/awsZzRAP/AFf/AAGFg2gzMZ+gc4j1BoBFCXITiSaNO3rbx8OmIIqXN0W8UMqxh7gpqAtYbi1hzwDeWeWHvBeGxAN3G9ufdBvyw2SteQItRrMfukIRt6dPycYFc0tmhilqvYhNUTtwgDzqtDXBt7p67jxwN9osSYSxP01Yn+w/JwLn4Slnj4pWQkBJWDfPTYjnz/rbDKcRiQi7qm2nQxP9TyxQJhP2qVmbhlRuNFzpB+43xPBUk/qzFHIxZb3Pec+Xj/nFP2h4mIgrGSO941CC5t/H69MWYKTOIpIqyOLhvuUm1BWsR5254mzfQLlqenrIIeLUUoQDd2kspIJ2NvLElJRT1ESzRQMyG+4ivv1t/wBY5XLm1UE9qhViFKh1aN7gm5tY9BiI+1xBoEpK2ES91pUQltIN+6wFgTc7/fblPvXULorhuCX1IhLDUOKCGA5Hb888X6cvFUpxzIsbISNNroCD0ty2wOkr3pWaIkPTxxKh1nYgD9oW8NvnimubQQUUlNHIUid1Zw7MzG3IDfYemK9zALiZVZkmeYDSWsAWBB5csScORIpJFeUxLbUCGFgfXbflt/fAWKpABL1bwNaynhkhvjfzPTD1zN1YKKgmQLpDA202HRSbYl5dguHGoa0SrHEBJJLu66ibfKw+/EccbSOFFPKLDvnkUtv1Ntvz44F+3VESiN6qRLnfSO9cnqb+fLDdTX4AlPEUkd2S+/ry8Plgu0PgLyBO7ebbSNI8R66rDESaHk0F5AALErFcg/A457HUI6LqUtpBLLMusgWNt9vH0+GF7DPK6tDwpFZwEtUBmI/v1HL8Q1OwEhWAJI8dZEXI1IjqRfn9+xOFB7b3BDJDGTySKo0sbX8beGK8VMZAY5a+liAGs2kHeNuR5fj5YMU3ZwNEVnrG46aWjkhnAYob7C4tztf5Xw92wsbg8PWVDniggI1l4lSPe8t/O39MPMtWikw1saLYWJqwNxyFiQTizT9n/aKxmnDrTBDYiYayQdtQAI3735GG5Y2V0slQtRHO8SESLMbKrgXuOQ35+trb9Vv36BgcXNMyhAMeY0qmWxszh9uV7C4/JxdTPsw0xxxBqvSBqeNApY/RN7jffkB9xxVFRDUVhnp6BavL4ogCDGrs7W6EC4t4dLb7Ye9TK9KUyOFaMqTxFdgHYbi4JPu325DfqMH1EuwsEyyO09ciE1GWnutZrMVta3r4j5jD4u1UkhCvluo7lrNfbyOnEAqIGpY5M1eGep1NpVJy4DeB08uQ29MBk7QT0zslOsEYZjdQtgnowHphx1NSXQNuJov/ACanfd6AA+F2P32wsZeozyoMznL690gJ2CoGuepJKk3wsdd6YsIhYHJVyekrTlc3FqIg6xLOzWbqLlvyAcSGkeGplK5JDLHuY1WGJjyJF7edvliycmigy6KkqFpYSp/VvVTM5F9rqLAX323xby/sfRJDrnr/AGlzurUwVSDzPdAO38Q+/D47LgRTgirgyxSZPT01O1gWfhjS1uejmRy6fdhuY9nocxqIzBWQUqIh4opKVtT7KSWWy2sb7fW+GCdT2UMdxDmaR3GtEngBYcjsbvvcA8r4zdWmaU7zHMpZ2p1Nyf1qByLDmANthz88c5TSKsD8z7NU9MzQrmDnQLnXFa3me8PpXwbTKs99ihjpokkjdLpIGJBFrA33G/hf8cBaesy2pzKBamNqWB+9JI87Mo5gbEGw3G/l0xs6WPJXHDy7MoWZCFZ2pwL72BJsLm/nid5x+KE4XMtTR5jQ5mslYFVqWZWMSvaQXUDkbXv08sE6bMK6alt7BWuyiVNTgDmxIA1Hfb+uCec0WY0kkMeUyRSwSfrXkXSxY23BXV8b+XxwKostrDCzVFdLre4bQ+ldzfbwG3Q4iWrmvkhbaRVmyWnqaj9I1M00LyuGkp9Csu1hY7WINvHqcNbL8nad3LVIaRiuhRGqX8BbcdMFEyCn4XDmkVnLs5NxuTz2a/8AfF+loIacMsCQhCuk2Ivb/OMr1PN2y+EZr9HZS6QWlYmSxVeLKSy+PX8i2BsWXxVLCKJa2Vkuzukofug78123tjdU3Z/K4wCKaypcrpa4B9L4maOlpo9V+FFyG6oB8euLepuuEFjz6pyN1VpIaerFxqcSxKBpA6kHmPTocdo+zc0nsw45jSUMQWgZgRvubbcvM88bn2yjERYVkFgSDeSx2F/7HFGo7Q5ZQyzo8s5MfMhQVOwOxNrc/uwt6q+EhAB+ylVESYM3hJ8GiZb/ANcQHIc3j70U9NJIpJXS7Ag/EC2CtR21isVgpW4jd2MEhy1jvsP2uW3nhk/afMEnMPs+gyjUsnDB4YI2JGxHQ6j9+GlqPAcAWTJM6ii0+zR7i+uOSNWF+guQf+8MRs9ptP8AuKqiwu6sEvY2vc25H54VZWNVBzK0chBKlmYtqPS/Kwv/AHxFS1FQ4HES+k2XQurST945ePwxoipfmsBxcyqVBMt9WoMkgfUVNiCQd/n64ZJ2hdJifa6luID+s2J3vz/r+dtFBk88s0AD1YEcVzJ7o3YalFhzCljsSCRzFzgvJkypDHwswmVbEEzMrdbg6RfawI9beeK9q6j5fQw9H2leCHgrLfisNUmi2kDkLfn797OXVtOFnhgjBldC7yGYlV32JFiAPe5X3I5Y2EfZ2liqT7TK00hYMkjwrGBblbcEXJ5WN7D0xMcqyyZ2SLJqWSoLXl7ttSatzqNugvytv8ovHsPFmXnr5kpYVaWlqo4VILxixTc90k8+vht586a0NXPGJqSlapUsLApYJzI3B+GNtBkWUgozZfQwoTdx32fkLi3d6+F74s1C0kNLHHTZfxtJW1pLaACDps1hva3z+CzjHgMWYynyemWJRMrK3MIKhO6PDCxuFnr2F6aloEj6K0ZYj1Kgj78LBn91/sMQSpzN3C5fmkKRRssaxpGxh1dFHfJJt0xUNHmftg2y8SODZEiZGYXsQCh5/EE+G2Jqf9JVIbjU880sS6ZXgJ0ykkXtoVhcAc7Dw9b1P2dzuqVGhjmpoZJVeeCYhbBfduTcEbC4Crz9cd8pW4FimMy5O0UEjey5nTUyTHXadm1Ob7gBxcjba+LdZX56Q1PPVSySiIAmKEIhbr719jfw6csR0mTVNa+pMy4Y4KhJOE6gPfUS17c9ha3QYJvVplg01mXQSRsTealqib35k3xDUpdCuEDZYKGrgaCvEbRl+5xYgDyN/dPK/kvLAauy7J3pzx4DdQoOqRidN9K6QdyPU7AY09Xm/ZumhgmqoZXCj9SrqGAsLdDbr18cMlzjs/PLxYcllqZNjrhptl8Lttyt8MRGnMHKJm6ejly+NZoo6a0k4jjWamW5Fri7C9h0tzBtizW5rPl1VLS5pHOg5kUs5IXzIO+CFFm+WNKxqqYUCUzGTgrPx3dr+8yD4Hn8BjJ5nQQziPMKSZpKeaYDXL+rNyd9Xe3+G/PwxE4O/JLs+hI3aum9uWnooJJepLuNr7m1+ewJxa/8kqjHR2pYgZXs9pUOheV+e/X5HATNcono6taKpbjVRiB/VPdgtupHl4YhosiYsrVee0UUaR3smp7qbgsLCx5n82xGzSYEmc5/LWSeyujqsw4YVN7HV4736D/vFWvqcwMop2aOoWEKl4we6QLHoL+t/U4Kf+O0UPsrw5gZUrCzpFKOEFtudJ5sOndwfynI8hcKr5vSrLqBvGCjbHYXcjwtsDyx3hCKVkgsYhKWoKWKu4OxGysBe/xFvD5YvRwPFVGaSKNkJ2WaTuDysTz28x16Y9Wouz2TpYCJakLcqzEML/wgKcWf0fkaMYrRwzBBtxAGAvta98dF/YVjyWjyCpr1WeqpCgIZ3udSxWF+YNhyPP8AxgzJklI0sNRUZiGhUWMUZMga3PdT49PMeePQqnJYyqy/paogjPMSsuk+vL+uKMsWSUkdZCaiaVpRpcIANa23A5Drzvf1wlk3awmo+TMLkGRRaZWpHd7ELxh7PfqPe57X5+BwVkWgpiiU1OoULqcU8WpuYvudgLdbf1woxlMKSPDSJwnuBI7lwd7cmvvfy6c8diq45ls8kTEKQtz05bagLG3hjlOUYO0rlJrsUa3tbktLO1HPHVTpT2DBFQEbc/eW4sfA9caCGbKZg+nMaaKnvrKcSNWHIi+9wAd/jjEz9iKKVi1PmNVChO6vpkVQeVrjf54FydnDbiQ1jOTbUJYhHYAdAL7+WNWema8HGTqxdz0ilq8kKNFlk8NQ8W2qOMME5W3JHl44oVFwplmn4bNZSqMgJvc/EbcsZTL8qjoZhMKmUzAWLJ3Ab7dN+vji+yqGMgUgsdyRe/xx5tfUU72gXGcmvcEpPZ4xdJeL/wAQQfm34Ypy1tSCRBBpA5MtpCf7fdisxttiFz/yxjUwci37RmMveJqPCwFgPLCxREjAWDN9rCw8kK4bpKt8liqKejmeIrErtve7MWubn06YNR9oI3p1asr3iOjc2uXvtsNXy2xiB2SzESTS09fJVJPbjPFDclug6sP4hiCg7NZ3lzyLDWyKAChNPG0jMl9hddgRY7Ejnyx7TqQcE0XaWRrp+0VLxZI4IKipZDZi8qwhRtfmBt42PXGfzLtXTVlIb01DGhDGzh5HLdT18t9WI5uzEMFLxKyqKtc6UrKoQ7eYAJtbe1+WIYYsup6OnSeg4iszCV4aW6dbWdxYfO4sfXHLesNxfcFz1YzEU9PR0rPIi3YRx91gebW/PLBLMIs/q6hZKiljjJW+gkyDmbHh3bw27vTF2WSkoCrw5ZRQpZV4s87y7/8AHZb7fSwQ05isjyy1jwR+8qi0QPoFF/mw59cS6/cFACfoysy+E1tZXTwib3+Aixhr3O19J6fRvvthrJR0VNFSCKWsiZuKhDPpRtumkDVbr9+Js9kpRC8XsCVFXLZmnZlDD1PPf+LBTKckM7M0eZw00pQAwH9YyKPDVYjpyxGeXJSXgdlWeyaKeNMvgFSWIQJYEgWtp0KeSi19sFJs9ilp5BDlVWzlmSRrqtuY1XJ3H34rVmRSNSiDKszE89zrlLjiEG3d6gczgLV0s1GVZ8vlaoUMUTg6lN9+d7Hr0xEnNdB8h6Wqoq6IxUdII50BAd4WkAJtz03v1xks07P5tNLLIstFPM0hdzA6pudrWO69Ba3h4Y0c9JHSZdHW9oJpqSmuP1WpRY+nQeYHyxO+fdmlnWUvTVc7peIQpxDYDrqv0HQX88d6Kq9bEScX1MXlOX5k8yy0kdYkZO70zsLt5NYC3SxxL2khqxV0zVdNVRAtqqJJg4HMAd47HrjRZn2tdiEalpaaEbLJVvuRcGwvvbl+z0544lMM2geHP5almDnh+/GirfYBQeg626+WNjUox5RxtF9CrS19FTxzMKh444z+r1NbUtl628dt/W+Hy1UMCMVamTbucRyxI6e6GsOXvWHnh/8A4vk0CSRpQ2aTcOZd/wD42FvO2JFyPLstp1mmqeA8LDQXQykC9xYnbmefoMPetaw8H3BUFVmNZq4jRUsehtTzqbA+DdBvzGrnt42lK17w8SkEdamlC0g/Vje+rn4W39R52IV4jqo6mPI/9ZmSoFKmw035PoOx36W8MckynOpsvEOcywZfSTII+BHEXc+KrpsBfzPXGStCNV3mWoqINq6magWN8wpnpkcd1nIb4XGO0mcZrLEkdDKpg94u0QiuCeRY3YgW6DcYIey0WVw6jlVZVmMW4lRd2UdNKXAX545MMtq2eQxzUwJ7psV+YBNvljLgqfxfUrBPqMpF01AlqpYagLe0MaaY7+f7RwXoY6bMJEp1iiDseSzEafHnfAZ8ml9+lmEqjcmOVZGA872YfLFKpgeRSj2AOxIWz+W7ghfgcVCj+o6NwSsupvZuxkNv1VawPgyAj5jFKfsZV3PClglXb9qx+R/HGDzWpzeDKVhy6Ss1KR7rklht3WKnSfLbmfPFjsj2q7RUktRHVzzSsEvHHLuNrjm2w3P/AHbGr6SjJXRnvzyah8hqYJZIuFIzKe9oK7bcj3vC3wthYbH26rAv/wCJTjc/7csdj4k9/n445jn9DT/jHdBaszDgRMtchUMpKo19LfcR88ZuftbUUmUR1FXTmGQzmOMRldJXfnYE9LdBviWKiYxcKOUNBL3jFwuIji43K8j8cQtlkb1NuBMkVId0pAscVx1ZTci+/Jvhjhuy7na4MrswmhzsTNTUcRhBlqRToNTXHUjUQRz39b4hos5q6jLpKwrUuqy2R2v305e9yvv1xK9MaP23N04NLNMmkS0jSTcMHmSh90bc/XfFSvgkqOz8Ei6a7MIpPecgEIdgDc72O+/ifHDljJck3fYL1D5W8hpK6dWrjpkRo3LjTfrbbpzvtv44g9gjizCOVMwVok5RzcQqR4Gyi/PqemK+X5DPxJszyivjqK/h2MGoDh2vtfcHcHnYHni12WyeqZJ4c4jeHSGcyhSzk7GwF7fd054mVJ2sgOwrLX5wKbhqsKqT7SqqAB49CF25nEFCuX0eeSUiVGZPSSppeVtk3PPl7vhvzxdTIs2vOmU1bGlltrWsRkuRy2AvbyPX4Y5JQ5ZGsiZlLJmEoULJFRkhRzsDYjqf6bcsEISj1GXMkyKlHaCXh1lHVUWrUIhLdr2J3I8NsF8voa+grKuSOQTh9aOz7CM90qRuCTZibegvjN01UQI6bKoKbLTJGZI7xs7W0sdTEi3e5AXvfywRo8vqeD+kJs9iFQFNpGqGbRIR7ygd3ltuh525Y1Qje1iblzPsup87aSaSSGddAvGIdRUgEXuSD8RywIy3s9TxR6UeOB+ghHD1DwL+8f74z9T2nfJM2lebMfbCzgyqi7p5g9DYD1+/GwoK6mzemjqKGSM6+aDk/p4H6pxobnFWuQsWwfX5DllXA1PNTrTzD3KhU76nwa/vD83wJp8yruzsyZfnqNLRf+mdDqKr9RjzHkeX3HU5tE75aBWVAo1OyzsQrWtuN929BY4GJHTUlE1IitWRudZlzABY2bowQAufjpvci/h0pqUla1yKk4w56FpK2oskWXUjZhHMLxvGwC266d7ix5gjn6jFv9IU1NxkklFRLHuYICsjJ6kEKh9SMDZameeMI8ganAuYhEscR8O7uT8WPnfFSWUFdOvikbBBso9B0+WHNUaSvVdv3M71Mpfhq/7BBu0le0tqduBH1CFWkJ23L2Av6BvXEVTnlRKP9RUMCFsUibc/H/PwwKk1ts1lH0V2xHwl8NOMNT1GC/Cjb7sap1Jc1Jf4CFPmEMLjXA+nppk0H+hwV/SeVyUzBRWxVBB0M8nEUH4EX+Qxm7AbLvhjX/axlfqFdu7Z0VKCXBp6GOGomVJK+JYyN2Wdg59FZf7jF6TIm4VqaaCYkd0Spy9LA/k4wpe2w/HEkNbPTm8MzL/xcrjvD1KfVoW1GwezDsxUSOH03KbhqaYo19ugNug6YGezy000i1tTOQ4tw6yJW3HI6rDpfoeeHw9pcxhtqm4g8JRcfdbBKDtgskfCrqMSoRuUYf0I/vjUvUKMvnEnakvjIzs2TU1VIXbLaJiNr2Vb9eVx4+GFg1PVZHLIXjnq6YHnEI7gHytfCx3UdPJXTZDrVVxwX6T2RYiTXROP2lSQaT+OA/aHOKmmQw5dSCVNg8iG6DY7W29bjD+yvZOeGlbjLJFJK1zxHErkb23Fh18MT5rlmWTVwomizKunQrqpUDBfU8tvMY8yNNr2s9B3aM1lFFV50aqSp0VEJu0cSsS0Z9AbLsSN+n3zLk8dEKjMMzy2ohoETSqzVCXZjsLL5c97+hNsEjRVkFeKhwmQUKR8tSi4HMkX7x3Hny2OK02aZC5kWaLMswmjkZYiZO64C2uCSBb3hp3wKEUwSCeV5llOVRSS5bTVkrTXBjijY2AY2Fz8vHYA4upUdoJmmlWOiy+FirIat9TWtboR4Xt6YzWZ9pc1WngFBSwZdTU7awUdbkgEWYEg3OrE2WZRnnaLXO9VLvbURIBp28b35HzxWSXQYTqmpEp1qZ87rJ5mYHiQy8GE8uV+lri3Pc78rSUnaqlY1dCuXzz08wC3ppWaSQsDqGonc2t1HPrgpkPYHLqAq1WVqGUbWQDT8f2sa6koaWlFqWmiiHgigHAovuM8+l7J5jNRgUbTUdOECJFUrfQDfbbfa53NxuR6117PZdkeXk5tmUtWkj6lhZ+HHr6C1ybbeOPR6rNaOhDCWW8ij3EszfHwxnZM37P9ouNTVUOggkXNmBPiRuPmDjrGL/KL2rqgPUUfZqootdLQUNawI4pp5Qqg2JPe2Hpcjc88B6dKPLjL+iIxRxy/7ghvI55ftPdF+AfyIwczXshXpHxaCdMxpl9xFsmgeS+78sDMlymTMKyphq+LAKdQGGmzBmvbY+h6eGN9OnTUMpO/2PNrVqrnhGNvuQRziOb2kX42mxnlJaVh/wAjdvkfhhj1wJvGhv8ASIxbr+yeYxNxIpFqv+R0t+H34FywVFI+mrhlib/+qkX9DjzdRr6/xj7V/O50jpUvnyybjSv7x1D1w7UP28Qh/T+HEgF99R/ix5MpXd2+TuopLgeGH7Hd88dJP7RVvuw0/VW5wh54m4Md3bctP3/fhpiY7htjjur4eeEW+OEBC8X1b+eIXixb14dHE1QbIlx1Phi023ZADeE1+7ixFRsLNOdKnfSBdm/D8+mCSU6Q+6NTj9q1wPh+OLdJlk1cbrEWJPv2vq8ef9dh4nHt6X0zjc1DsvBiq6luWFJcgyK0a6UV1W+wU/153wsataDL6dQjhpWtctHwiL+rqSfXYeWOY3/W6aPCiL+nV3y5BBayiNP7LKzqj+8wuL+vXFumoaWlpbZUsKFr6X3Nz59ced9ms0zTMKg0LUjVDqdLtdQ0FtjqJ2Nrjz9cbSniNDJrkqOGR7y30r8b/nfyvjzVLJXPWuAe0vZesqWevpapJa1k0SoyWSRbcgCSAfuxgogaKrfhUrIyyfrKSTSHQWPLluSPz09iGcUUkbG7MoXZ1W4PkPz62xlKjOshfN3krMvFPMgKCqeNZNLdNSi4Pj1xMkJruZ2ngXP6SaSljZ4I760kOgqQP2+XLfbfBuhyetEIOTZjTSVUBAMUMp1ixudzzHptvgZVdnMxz2RamkdZYwSIqqF1jVxe3ug/dv8ADAXMqOqymTiz1nHlWRlU0ihSjC19JA73Px54dKn7gcuD0DL+2tTQSin7Q0ksLDbi6LfMciPli7mOYV9ZH7TR1UVRQkW1U9za/iq7i3n88YTJu3s00a02bQJmUNlFpVGu5IXn8euD2W0mT1s6VPZbNpcrrmUMKaRrhgfLqNvP4Y7yg1zYmMos0MHZeGeWMnNNZSwqIxGjqwFu7bfTy8+ZwUruzeVVl2kpYozbaSIaHX4jGdzCfMPZTS9oYqmlW++YZduhH113t+fHByGsjpcpimoaqOooYYwrMg1sOVjtbpcm4xwu1ydFZ8A2go6mGWX/AMdzpKnhMVkhqNjcXBBYbdDzGCa59we52iy2Snv3TUqNSfaF7fnbFehy7JM1r/b6WoaQmzGBZdMdxuCVFrm+NLyUlSGVuat+fxw1NicUUYYIaqITZZWJIhH7Nj9/+MRvEyKYahSQ3NWGzD+hxDW5CstXFPQ6aGTXeV6clWYee1j8cX42r6RNNTproPKMCUDzF7N8LHDyJxAdX2YyqqBZI2pW6NBt93I/DASt7H1sV3o546peisND/h9+N1EtDVm0EpjlP/qcaT9k74EZnB2hSs4GXLThFNw6uCFXfdwRffwXw54j6WlU+xzl7TA1EFVQvoqoJYiejg2+eGcb6S7Y9QZoJafh1MsLtaz3ACsevdOAWZ5HkEqcQyx0rnbVFKoH2SbfdjNPQTXxFePlGM16+TWww/8AG+L1ZlMUEtoMxgnTpZTqA87Aj78OgpkpzupkJ5atreeCn6dqJu2JxnqKUerIKajLKJZTpivffmfxwQ592NdKnkv44lghaU2RtTf0H4YL01HSUIilq5FDPcrGNi3pfkPrH4Y9ilp6GijeXMjJerqXaPESjR5WeC1TUALGu7ki4Xrv+A3PiL46cyprPDSxvECAHkAAaQD6W3Ly5DDK6tnqJ1fjPFHGbxRROVC2/qeu+M/muZU2XRqzIZJW7scYa7sfLHmanWVa8+HwejRoRor2oLSSyK36uRlU72DW/vhYyn6NzHMCamrzJaN3O0EcwAUdOvPCxnxf6zvkzf8AZymzChgL1s1OsjG4ip0ATwG3Nj53xUzfsz7TWtX5VM0FW5LTLI7NHKLWsbHbpzPLpi1m+c0eT0UtXPMmgX0qri8hHRfHFqgrRmVFBMgaJZU1cOQWIv4jrj0HGL4JuY6hqmyeBcozWhky4BTplgN0ttyJvY/P4YN0tDQ8KB9IrFAussrltf8AF1+O3lil27go82Sly6XMOHPr1xwqLl9uYW9x435c77cpMg7NxieOTLM7ZYSoM1LIEZifQN3f7csQ1JDiwd2krc7hq4Wps2Wjhv3I4odKKB0t7vxYnyAxk8/FVm0/Gq5DO3INflb+mPUavNMly+tagnqYhOCNUZW4a45EkW+BI5dbWxne0HZqHMkb9Hf6ZnG6hiNXqenrY+mO9KcIHOpFy6HmU6VEQDovF02HMFhY+I36efIYnpM1Z6WWPlpjEagkDT71vl8MdrslzLJZz3WK9LDmPT9r4XxVkSCqUGZLHb9ao/rjRu+DO4NcM9B7OdscwhdlSp48I06Yqj03Abn49bY1GXZxkmYOsrJJkuYyftcTTdvAkd1v4vDHisCz0a3phFURFrnYG3w+W/lgjFnCVMcIM3BYSA8OYkjaxtq8L/1OKdOnUXhgqs4P7Hu1BlvsdTxooqYPLuZ4iY9W97mMbE/WUjBCKaoWqZZYgsWkcN1kFnPW/h/3jxvJ+02Y5Osaw1Mg4s7MI3bXEqlja5PhyxvMk7W5dWsZquJopFJjadCZEUiw2B3X4Xxknppx5NUK8Jm1EmHq+KUU0D0xqEniNPb/AHVa629eWM7mna5RIabKADLY/rm3+Kr19T4YiMJSdrFynGKNNm1dl9LShczMbI26RMLsx8hz+O2AC19VndLbLqg0tIJmh0szF2spN2c3NulsYaqzPXPE1S7TVjSbrxO6D0DN5eAvgjkfaOrppjTVNLK1PHM0xmijvYAFdKre5G3Pns3kMaJU1SV+5nzU3iTdoKJMmjSOpkDcU2BRCdO/M+A5ne3XBCn7L66cVAr4BGRquouB8Rt8sCs57TSZppp6QBKZm0ljYg7E9fe5EdB64Fk5lEzGjrqhWcBd3sQAOmOf9QqLhv8A4S9DRfLRof0WWmMEKiZuEX4ynSrAN0vb1xWp6Spmk0RkadWm9tQ1eFhz/PnjJQ1Oa5dM5fMagRnvsTe7G9+fI3Pl8MERmOc1k71U1T7PI6aVjXmgNuvS9ufPHWPqM1HkipoKMmsUbfVSZTHoYpLVKN12IT16E+XIYCVdaZp2mJeQyX3fnjNtPWIP9QrMn0ravvxVr87eKNYKRWMz+6zLsAB/nHmVak6sryNUYxhHFBHNs7FKOEl5KqT3I1NrDxY/k4r0FKICK6qmMle/UjuxDwHgcVaKiWnJmkPFqGP6xzzGL6c+p8uvrjM5OPtSLSLOq5La1FzfvczhYd/rJwDRUqvGgCltF7tbfrhY57MirgbtFmdRX1MWTSpBTxKRoiiW4ZVFzbYDqRY25ehxu8nmy6jyylgWZlZzpVSCWJ2vuFA6j/OFhY9pc8s4ojbsvTLXTV9RLPLUOWJYSFVUf8Ra9thv4Ygyvs9NlJZKesZaYyBwyALLIeupxb4ADboRhYWHcqK5Iv0zlHaesNBUULzKiE+1gBHRRexHWxItb5jFGuy/NeyiGppqhKvKrg6JCQUU2t+R8sLCxnqqzujpNFmgzygzmNKeph/WyHS0ZGpb+vXw5D4c8C837FRVc2rLbiR2C6C1r36XPP4/MYWFiqcnYnrEzM2TjKWeor3ZGUlVjSxD+R+PoPAnAkGDMJ2imh4M7HusDqGFhY1qTtYyySI0WvpJVpo2DKb2Q2KsOuxxq6HNI1o4ZpY14UaKTJFcW7tt1P8An0GO4WNdHq0Z6nDQQglnDifjg5eFUtde85Abc/Ej5HxxWrszYU6FF4aTMVTSbyMbk8zso2Pz6c8LCw3FK48nwCaejqcwraeKG71AZWjXUBpO/O+xscb7KaWnyGuamrZPa6x4HMylSI0sVPnq64WFjzJydjbBI4K/L58wjiqcnhSJRvLBYMCb2Pntf54MJkNJVRNU5bL3SbASKdjhYWM69z5Otxp7LsqFqiSBQOoDHCHZ2JNIWeGzrqXUrf5xzCwYRC7IKjJHpoRO0KSRWvdCLW+Nj92AFXFlMz34csbnbUrf4wsLESil0KvcrxZBJWVJTLaniTabgSjSbAfS+XTE1JkuZHN4KSqAiRbtPICGNgOQsfHHMLDhFSfIjYxyx06CKniPDUbWNsLCwsaLIg//2Q=="
                                class="h-full max-w-full"
                                width="72"
                                height="72"
                                alt="Italian Pizza"
                              />
                            </div>
                          </div>
                          <div class="grow">
                            <p class="mb-1 text-sm text-default-500">
                              Italian Pizza
                            </p>
                            <div class="flex items-center gap-2">
                              <div class="flex gap-1.5">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 640 512"
                                  class="text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M320 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L320.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L320.1 439.8 191.8 508.3C181 514 167.9 513.1 158 506s-14.9-19.3-12.9-31.3L169.8 329 65.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L227 150.3 291.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L470.5 329l24.6 145.7z"
                                  ></path>
                                </svg>
                              </div>
                              <h6 class="mt-1 text-xs text-default-500">
                                (231)
                              </h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        $359.69
                      </td>
                      <td class="px-6 py-4">
                        <span
                          class="rounded-md px-3 py-1 text-xs font-medium bg-pink-500/10 text-pink-500"
                          >Refunded</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        Imly2311
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500 hover:text-primary-500"
                      >
                        <a href="/yum_b/admin/orders/12939f">#12939F</a>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-800"
                      >
                        <div class="flex items-center gap-4">
                          <div class="shrink">
                            <div class="h-18 w-18">
                              <img
                                src="data:image/jpeg;base64,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"
                                class="h-full max-w-full"
                                width="72"
                                height="72"
                                alt="Veg Burger"
                              />
                            </div>
                          </div>
                          <div class="grow">
                            <p class="mb-1 text-sm text-default-500">
                              Veg Burger
                            </p>
                            <div class="flex items-center gap-2">
                              <div class="flex gap-1.5">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path>
                                </svg>
                              </div>
                              <h6 class="mt-1 text-xs text-default-500">
                                (523)
                              </h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        $350.3
                      </td>
                      <td class="px-6 py-4">
                        <span
                          class="rounded-md px-3 py-1 text-xs font-medium bg-green-500/10 text-green-500"
                          >Paid</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        Imly2311
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500 hover:text-primary-500"
                      >
                        <a href="/yum_b/admin/orders/9f36ca">#9F36CA</a>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-800"
                      >
                        <div class="flex items-center gap-4">
                          <div class="shrink">
                            <div class="h-18 w-18">
                              <img
                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAxAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAEIQAAIBAgQDBQQGCQQCAgMAAAECAwQRAAUSIRMxQQYiUWFxFDKBkVJikqHR8BUjQlOCk7HB4SQzcvEWQ6KjNFRj/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECBAMF/8QALhEAAgEDAwMDAgUFAAAAAAAAAAECAxESBBMhMUFRBSIyFGEzQlKx8BVxgZGh/9oADAMBAAIRAxEAPwA6aRk92oibyW/4Yjalcm504siHDuD9XHuZ2PKxKPs+F7Pi/wAHDhD9XBuCwRQEGHiDF8Qr9HDhB9XCdQNsH8DHRBgiKfDhTYncK2wcIMO9nwSWkx32X62DdHtg32fHRBgh7PhCHC3QVMocHC4GCHBw4Q4NweAOWl1dLeZvhNTaMFBF9XHeB9XCVUNsDGHHRDgv7Ph4p8PdDbBCwYeIF+jgrwFxzgrhbw8AWYV+tiMw4McFfo4XBXC3R4Afg44Yfq4M+zrhezrh7obQE4OFg17P9XHcG8G0VgMdCt0xZEa/WX5b47wvqtjPuHTBlYLjvD+riyI8OCYMx4MqrH9XEgj+riwq74dpwswwKwTDljbFgLhwXCzHgVtO+OlMWQmE0e2FmPEraMd4eLAjw7h4MwxK3CbCCsMWuFjvC/Jwsx4lUBsd0ti0I8PXUqlVZrHngzDEqKmHFfo7HxxYEWFwsLMeBFHA8ikhbgczhhjsbYs8PC4eDIMCtw8Lh4tqF+jh3d+jgzDEpcPHOHi4UwuHgzHiU9GFi5owsGYsSiNK76l+0MImP94v2hjzBamVUJHEIANxpF/X0x0VrP7vEv8A8Rjmml3OuLPTNUX72P7Qx0PF+9j+0MeZe1uTZ2bb4fcMO9pAGoSvYDvMU9354eUfIsWemh4v3sf2hjuuL97H9oY82SdHOuOsVkPImNt/u9cSl4FZS1cjC4F0if8ADBkgxZ6NxIv3sf2xjvFi/fx/zBjzkzU4Ma+3bE2vwNlA68t8OaupoywatsxB73sygeu4J3wskPE9F4sX7+P+YMd40X7+P7Yx52cxRFaxia4O5p1uefT++HnMo9Kf7eq29qRQbcut74lyHieg8WL9/F9sY7xYrf78f2xjzk16OwsLLp7p0KNR+C4YK0HT39S6iBYAb/LBkgxPSDPF+/j+2McNTB+/j/mDHnck9IgjEsczuR3iH02+WHxyZEFR3WqP0gjEN1tvfx/O2LWPciV0eg+0wfv4/wCYPxwvaoP38f8AMGMLr7Mpr101VfeweU77+TenzwjLkC6dOUu4c93VWLv/APbi1GD7k3l4N37ZB+/j/mD8cdFVB+/j/mDGXo8tyqdCWysRW8Zg1/TS5xP+h8tXdMvT4M344eEfIspeDQ+10y78eP8AmD8cI1tL/wDsw/zF/HAWGgpYlulBGv8AAThGCm60yfYwbaDNhxamncd2WI+eoYdx4htxY/tDALRAnKlX7GO3iXfgquHtoM2HuPF+9T7Qx3ip9NftDAATRY4wgf8AZ1fw/wCMLbDM0HEX6S/awsZzRAP/AFf/AAGFg2gzMZ+gc4j1BoBFCXITiSaNO3rbx8OmIIqXN0W8UMqxh7gpqAtYbi1hzwDeWeWHvBeGxAN3G9ufdBvyw2SteQItRrMfukIRt6dPycYFc0tmhilqvYhNUTtwgDzqtDXBt7p67jxwN9osSYSxP01Yn+w/JwLn4Slnj4pWQkBJWDfPTYjnz/rbDKcRiQi7qm2nQxP9TyxQJhP2qVmbhlRuNFzpB+43xPBUk/qzFHIxZb3Pec+Xj/nFP2h4mIgrGSO941CC5t/H69MWYKTOIpIqyOLhvuUm1BWsR5254mzfQLlqenrIIeLUUoQDd2kspIJ2NvLElJRT1ESzRQMyG+4ivv1t/wBY5XLm1UE9qhViFKh1aN7gm5tY9BiI+1xBoEpK2ES91pUQltIN+6wFgTc7/fblPvXULorhuCX1IhLDUOKCGA5Hb888X6cvFUpxzIsbISNNroCD0ty2wOkr3pWaIkPTxxKh1nYgD9oW8NvnimubQQUUlNHIUid1Zw7MzG3IDfYemK9zALiZVZkmeYDSWsAWBB5csScORIpJFeUxLbUCGFgfXbflt/fAWKpABL1bwNaynhkhvjfzPTD1zN1YKKgmQLpDA202HRSbYl5dguHGoa0SrHEBJJLu66ibfKw+/EccbSOFFPKLDvnkUtv1Ntvz44F+3VESiN6qRLnfSO9cnqb+fLDdTX4AlPEUkd2S+/ry8Plgu0PgLyBO7ebbSNI8R66rDESaHk0F5AALErFcg/A457HUI6LqUtpBLLMusgWNt9vH0+GF7DPK6tDwpFZwEtUBmI/v1HL8Q1OwEhWAJI8dZEXI1IjqRfn9+xOFB7b3BDJDGTySKo0sbX8beGK8VMZAY5a+liAGs2kHeNuR5fj5YMU3ZwNEVnrG46aWjkhnAYob7C4tztf5Xw92wsbg8PWVDniggI1l4lSPe8t/O39MPMtWikw1saLYWJqwNxyFiQTizT9n/aKxmnDrTBDYiYayQdtQAI3735GG5Y2V0slQtRHO8SESLMbKrgXuOQ35+trb9Vv36BgcXNMyhAMeY0qmWxszh9uV7C4/JxdTPsw0xxxBqvSBqeNApY/RN7jffkB9xxVFRDUVhnp6BavL4ogCDGrs7W6EC4t4dLb7Ye9TK9KUyOFaMqTxFdgHYbi4JPu325DfqMH1EuwsEyyO09ciE1GWnutZrMVta3r4j5jD4u1UkhCvluo7lrNfbyOnEAqIGpY5M1eGep1NpVJy4DeB08uQ29MBk7QT0zslOsEYZjdQtgnowHphx1NSXQNuJov/ACanfd6AA+F2P32wsZeozyoMznL690gJ2CoGuepJKk3wsdd6YsIhYHJVyekrTlc3FqIg6xLOzWbqLlvyAcSGkeGplK5JDLHuY1WGJjyJF7edvliycmigy6KkqFpYSp/VvVTM5F9rqLAX323xby/sfRJDrnr/AGlzurUwVSDzPdAO38Q+/D47LgRTgirgyxSZPT01O1gWfhjS1uejmRy6fdhuY9nocxqIzBWQUqIh4opKVtT7KSWWy2sb7fW+GCdT2UMdxDmaR3GtEngBYcjsbvvcA8r4zdWmaU7zHMpZ2p1Nyf1qByLDmANthz88c5TSKsD8z7NU9MzQrmDnQLnXFa3me8PpXwbTKs99ihjpokkjdLpIGJBFrA33G/hf8cBaesy2pzKBamNqWB+9JI87Mo5gbEGw3G/l0xs6WPJXHDy7MoWZCFZ2pwL72BJsLm/nid5x+KE4XMtTR5jQ5mslYFVqWZWMSvaQXUDkbXv08sE6bMK6alt7BWuyiVNTgDmxIA1Hfb+uCec0WY0kkMeUyRSwSfrXkXSxY23BXV8b+XxwKostrDCzVFdLre4bQ+ldzfbwG3Q4iWrmvkhbaRVmyWnqaj9I1M00LyuGkp9Csu1hY7WINvHqcNbL8nad3LVIaRiuhRGqX8BbcdMFEyCn4XDmkVnLs5NxuTz2a/8AfF+loIacMsCQhCuk2Ivb/OMr1PN2y+EZr9HZS6QWlYmSxVeLKSy+PX8i2BsWXxVLCKJa2Vkuzukofug78123tjdU3Z/K4wCKaypcrpa4B9L4maOlpo9V+FFyG6oB8euLepuuEFjz6pyN1VpIaerFxqcSxKBpA6kHmPTocdo+zc0nsw45jSUMQWgZgRvubbcvM88bn2yjERYVkFgSDeSx2F/7HFGo7Q5ZQyzo8s5MfMhQVOwOxNrc/uwt6q+EhAB+ylVESYM3hJ8GiZb/ANcQHIc3j70U9NJIpJXS7Ag/EC2CtR21isVgpW4jd2MEhy1jvsP2uW3nhk/afMEnMPs+gyjUsnDB4YI2JGxHQ6j9+GlqPAcAWTJM6ii0+zR7i+uOSNWF+guQf+8MRs9ptP8AuKqiwu6sEvY2vc25H54VZWNVBzK0chBKlmYtqPS/Kwv/AHxFS1FQ4HES+k2XQurST945ePwxoipfmsBxcyqVBMt9WoMkgfUVNiCQd/n64ZJ2hdJifa6luID+s2J3vz/r+dtFBk88s0AD1YEcVzJ7o3YalFhzCljsSCRzFzgvJkypDHwswmVbEEzMrdbg6RfawI9beeK9q6j5fQw9H2leCHgrLfisNUmi2kDkLfn797OXVtOFnhgjBldC7yGYlV32JFiAPe5X3I5Y2EfZ2liqT7TK00hYMkjwrGBblbcEXJ5WN7D0xMcqyyZ2SLJqWSoLXl7ttSatzqNugvytv8ovHsPFmXnr5kpYVaWlqo4VILxixTc90k8+vht586a0NXPGJqSlapUsLApYJzI3B+GNtBkWUgozZfQwoTdx32fkLi3d6+F74s1C0kNLHHTZfxtJW1pLaACDps1hva3z+CzjHgMWYynyemWJRMrK3MIKhO6PDCxuFnr2F6aloEj6K0ZYj1Kgj78LBn91/sMQSpzN3C5fmkKRRssaxpGxh1dFHfJJt0xUNHmftg2y8SODZEiZGYXsQCh5/EE+G2Jqf9JVIbjU880sS6ZXgJ0ykkXtoVhcAc7Dw9b1P2dzuqVGhjmpoZJVeeCYhbBfduTcEbC4Crz9cd8pW4FimMy5O0UEjey5nTUyTHXadm1Ob7gBxcjba+LdZX56Q1PPVSySiIAmKEIhbr719jfw6csR0mTVNa+pMy4Y4KhJOE6gPfUS17c9ha3QYJvVplg01mXQSRsTealqib35k3xDUpdCuEDZYKGrgaCvEbRl+5xYgDyN/dPK/kvLAauy7J3pzx4DdQoOqRidN9K6QdyPU7AY09Xm/ZumhgmqoZXCj9SrqGAsLdDbr18cMlzjs/PLxYcllqZNjrhptl8Lttyt8MRGnMHKJm6ejly+NZoo6a0k4jjWamW5Fri7C9h0tzBtizW5rPl1VLS5pHOg5kUs5IXzIO+CFFm+WNKxqqYUCUzGTgrPx3dr+8yD4Hn8BjJ5nQQziPMKSZpKeaYDXL+rNyd9Xe3+G/PwxE4O/JLs+hI3aum9uWnooJJepLuNr7m1+ewJxa/8kqjHR2pYgZXs9pUOheV+e/X5HATNcono6taKpbjVRiB/VPdgtupHl4YhosiYsrVee0UUaR3smp7qbgsLCx5n82xGzSYEmc5/LWSeyujqsw4YVN7HV4736D/vFWvqcwMop2aOoWEKl4we6QLHoL+t/U4Kf+O0UPsrw5gZUrCzpFKOEFtudJ5sOndwfynI8hcKr5vSrLqBvGCjbHYXcjwtsDyx3hCKVkgsYhKWoKWKu4OxGysBe/xFvD5YvRwPFVGaSKNkJ2WaTuDysTz28x16Y9Wouz2TpYCJakLcqzEML/wgKcWf0fkaMYrRwzBBtxAGAvta98dF/YVjyWjyCpr1WeqpCgIZ3udSxWF+YNhyPP8AxgzJklI0sNRUZiGhUWMUZMga3PdT49PMeePQqnJYyqy/paogjPMSsuk+vL+uKMsWSUkdZCaiaVpRpcIANa23A5Drzvf1wlk3awmo+TMLkGRRaZWpHd7ELxh7PfqPe57X5+BwVkWgpiiU1OoULqcU8WpuYvudgLdbf1woxlMKSPDSJwnuBI7lwd7cmvvfy6c8diq45ls8kTEKQtz05bagLG3hjlOUYO0rlJrsUa3tbktLO1HPHVTpT2DBFQEbc/eW4sfA9caCGbKZg+nMaaKnvrKcSNWHIi+9wAd/jjEz9iKKVi1PmNVChO6vpkVQeVrjf54FydnDbiQ1jOTbUJYhHYAdAL7+WNWema8HGTqxdz0ilq8kKNFlk8NQ8W2qOMME5W3JHl44oVFwplmn4bNZSqMgJvc/EbcsZTL8qjoZhMKmUzAWLJ3Ab7dN+vji+yqGMgUgsdyRe/xx5tfUU72gXGcmvcEpPZ4xdJeL/wAQQfm34Ypy1tSCRBBpA5MtpCf7fdisxttiFz/yxjUwci37RmMveJqPCwFgPLCxREjAWDN9rCw8kK4bpKt8liqKejmeIrErtve7MWubn06YNR9oI3p1asr3iOjc2uXvtsNXy2xiB2SzESTS09fJVJPbjPFDclug6sP4hiCg7NZ3lzyLDWyKAChNPG0jMl9hddgRY7Ejnyx7TqQcE0XaWRrp+0VLxZI4IKipZDZi8qwhRtfmBt42PXGfzLtXTVlIb01DGhDGzh5HLdT18t9WI5uzEMFLxKyqKtc6UrKoQ7eYAJtbe1+WIYYsup6OnSeg4iszCV4aW6dbWdxYfO4sfXHLesNxfcFz1YzEU9PR0rPIi3YRx91gebW/PLBLMIs/q6hZKiljjJW+gkyDmbHh3bw27vTF2WSkoCrw5ZRQpZV4s87y7/8AHZb7fSwQ05isjyy1jwR+8qi0QPoFF/mw59cS6/cFACfoysy+E1tZXTwib3+Aixhr3O19J6fRvvthrJR0VNFSCKWsiZuKhDPpRtumkDVbr9+Js9kpRC8XsCVFXLZmnZlDD1PPf+LBTKckM7M0eZw00pQAwH9YyKPDVYjpyxGeXJSXgdlWeyaKeNMvgFSWIQJYEgWtp0KeSi19sFJs9ilp5BDlVWzlmSRrqtuY1XJ3H34rVmRSNSiDKszE89zrlLjiEG3d6gczgLV0s1GVZ8vlaoUMUTg6lN9+d7Hr0xEnNdB8h6Wqoq6IxUdII50BAd4WkAJtz03v1xks07P5tNLLIstFPM0hdzA6pudrWO69Ba3h4Y0c9JHSZdHW9oJpqSmuP1WpRY+nQeYHyxO+fdmlnWUvTVc7peIQpxDYDrqv0HQX88d6Kq9bEScX1MXlOX5k8yy0kdYkZO70zsLt5NYC3SxxL2khqxV0zVdNVRAtqqJJg4HMAd47HrjRZn2tdiEalpaaEbLJVvuRcGwvvbl+z0544lMM2geHP5almDnh+/GirfYBQeg626+WNjUox5RxtF9CrS19FTxzMKh444z+r1NbUtl628dt/W+Hy1UMCMVamTbucRyxI6e6GsOXvWHnh/8A4vk0CSRpQ2aTcOZd/wD42FvO2JFyPLstp1mmqeA8LDQXQykC9xYnbmefoMPetaw8H3BUFVmNZq4jRUsehtTzqbA+DdBvzGrnt42lK17w8SkEdamlC0g/Vje+rn4W39R52IV4jqo6mPI/9ZmSoFKmw035PoOx36W8MckynOpsvEOcywZfSTII+BHEXc+KrpsBfzPXGStCNV3mWoqINq6magWN8wpnpkcd1nIb4XGO0mcZrLEkdDKpg94u0QiuCeRY3YgW6DcYIey0WVw6jlVZVmMW4lRd2UdNKXAX545MMtq2eQxzUwJ7psV+YBNvljLgqfxfUrBPqMpF01AlqpYagLe0MaaY7+f7RwXoY6bMJEp1iiDseSzEafHnfAZ8ml9+lmEqjcmOVZGA872YfLFKpgeRSj2AOxIWz+W7ghfgcVCj+o6NwSsupvZuxkNv1VawPgyAj5jFKfsZV3PClglXb9qx+R/HGDzWpzeDKVhy6Ss1KR7rklht3WKnSfLbmfPFjsj2q7RUktRHVzzSsEvHHLuNrjm2w3P/AHbGr6SjJXRnvzyah8hqYJZIuFIzKe9oK7bcj3vC3wthYbH26rAv/wCJTjc/7csdj4k9/n445jn9DT/jHdBaszDgRMtchUMpKo19LfcR88ZuftbUUmUR1FXTmGQzmOMRldJXfnYE9LdBviWKiYxcKOUNBL3jFwuIji43K8j8cQtlkb1NuBMkVId0pAscVx1ZTci+/Jvhjhuy7na4MrswmhzsTNTUcRhBlqRToNTXHUjUQRz39b4hos5q6jLpKwrUuqy2R2v305e9yvv1xK9MaP23N04NLNMmkS0jSTcMHmSh90bc/XfFSvgkqOz8Ei6a7MIpPecgEIdgDc72O+/ifHDljJck3fYL1D5W8hpK6dWrjpkRo3LjTfrbbpzvtv44g9gjizCOVMwVok5RzcQqR4Gyi/PqemK+X5DPxJszyivjqK/h2MGoDh2vtfcHcHnYHni12WyeqZJ4c4jeHSGcyhSzk7GwF7fd054mVJ2sgOwrLX5wKbhqsKqT7SqqAB49CF25nEFCuX0eeSUiVGZPSSppeVtk3PPl7vhvzxdTIs2vOmU1bGlltrWsRkuRy2AvbyPX4Y5JQ5ZGsiZlLJmEoULJFRkhRzsDYjqf6bcsEISj1GXMkyKlHaCXh1lHVUWrUIhLdr2J3I8NsF8voa+grKuSOQTh9aOz7CM90qRuCTZibegvjN01UQI6bKoKbLTJGZI7xs7W0sdTEi3e5AXvfywRo8vqeD+kJs9iFQFNpGqGbRIR7ygd3ltuh525Y1Qje1iblzPsup87aSaSSGddAvGIdRUgEXuSD8RywIy3s9TxR6UeOB+ghHD1DwL+8f74z9T2nfJM2lebMfbCzgyqi7p5g9DYD1+/GwoK6mzemjqKGSM6+aDk/p4H6pxobnFWuQsWwfX5DllXA1PNTrTzD3KhU76nwa/vD83wJp8yruzsyZfnqNLRf+mdDqKr9RjzHkeX3HU5tE75aBWVAo1OyzsQrWtuN929BY4GJHTUlE1IitWRudZlzABY2bowQAufjpvci/h0pqUla1yKk4w56FpK2oskWXUjZhHMLxvGwC266d7ix5gjn6jFv9IU1NxkklFRLHuYICsjJ6kEKh9SMDZameeMI8ganAuYhEscR8O7uT8WPnfFSWUFdOvikbBBso9B0+WHNUaSvVdv3M71Mpfhq/7BBu0le0tqduBH1CFWkJ23L2Av6BvXEVTnlRKP9RUMCFsUibc/H/PwwKk1ts1lH0V2xHwl8NOMNT1GC/Cjb7sap1Jc1Jf4CFPmEMLjXA+nppk0H+hwV/SeVyUzBRWxVBB0M8nEUH4EX+Qxm7AbLvhjX/axlfqFdu7Z0VKCXBp6GOGomVJK+JYyN2Wdg59FZf7jF6TIm4VqaaCYkd0Spy9LA/k4wpe2w/HEkNbPTm8MzL/xcrjvD1KfVoW1GwezDsxUSOH03KbhqaYo19ugNug6YGezy000i1tTOQ4tw6yJW3HI6rDpfoeeHw9pcxhtqm4g8JRcfdbBKDtgskfCrqMSoRuUYf0I/vjUvUKMvnEnakvjIzs2TU1VIXbLaJiNr2Vb9eVx4+GFg1PVZHLIXjnq6YHnEI7gHytfCx3UdPJXTZDrVVxwX6T2RYiTXROP2lSQaT+OA/aHOKmmQw5dSCVNg8iG6DY7W29bjD+yvZOeGlbjLJFJK1zxHErkb23Fh18MT5rlmWTVwomizKunQrqpUDBfU8tvMY8yNNr2s9B3aM1lFFV50aqSp0VEJu0cSsS0Z9AbLsSN+n3zLk8dEKjMMzy2ohoETSqzVCXZjsLL5c97+hNsEjRVkFeKhwmQUKR8tSi4HMkX7x3Hny2OK02aZC5kWaLMswmjkZYiZO64C2uCSBb3hp3wKEUwSCeV5llOVRSS5bTVkrTXBjijY2AY2Fz8vHYA4upUdoJmmlWOiy+FirIat9TWtboR4Xt6YzWZ9pc1WngFBSwZdTU7awUdbkgEWYEg3OrE2WZRnnaLXO9VLvbURIBp28b35HzxWSXQYTqmpEp1qZ87rJ5mYHiQy8GE8uV+lri3Pc78rSUnaqlY1dCuXzz08wC3ppWaSQsDqGonc2t1HPrgpkPYHLqAq1WVqGUbWQDT8f2sa6koaWlFqWmiiHgigHAovuM8+l7J5jNRgUbTUdOECJFUrfQDfbbfa53NxuR6117PZdkeXk5tmUtWkj6lhZ+HHr6C1ybbeOPR6rNaOhDCWW8ij3EszfHwxnZM37P9ouNTVUOggkXNmBPiRuPmDjrGL/KL2rqgPUUfZqootdLQUNawI4pp5Qqg2JPe2Hpcjc88B6dKPLjL+iIxRxy/7ghvI55ftPdF+AfyIwczXshXpHxaCdMxpl9xFsmgeS+78sDMlymTMKyphq+LAKdQGGmzBmvbY+h6eGN9OnTUMpO/2PNrVqrnhGNvuQRziOb2kX42mxnlJaVh/wAjdvkfhhj1wJvGhv8ASIxbr+yeYxNxIpFqv+R0t+H34FywVFI+mrhlib/+qkX9DjzdRr6/xj7V/O50jpUvnyybjSv7x1D1w7UP28Qh/T+HEgF99R/ix5MpXd2+TuopLgeGH7Hd88dJP7RVvuw0/VW5wh54m4Md3bctP3/fhpiY7htjjur4eeEW+OEBC8X1b+eIXixb14dHE1QbIlx1Phi023ZADeE1+7ixFRsLNOdKnfSBdm/D8+mCSU6Q+6NTj9q1wPh+OLdJlk1cbrEWJPv2vq8ef9dh4nHt6X0zjc1DsvBiq6luWFJcgyK0a6UV1W+wU/153wsataDL6dQjhpWtctHwiL+rqSfXYeWOY3/W6aPCiL+nV3y5BBayiNP7LKzqj+8wuL+vXFumoaWlpbZUsKFr6X3Nz59ced9ms0zTMKg0LUjVDqdLtdQ0FtjqJ2Nrjz9cbSniNDJrkqOGR7y30r8b/nfyvjzVLJXPWuAe0vZesqWevpapJa1k0SoyWSRbcgCSAfuxgogaKrfhUrIyyfrKSTSHQWPLluSPz09iGcUUkbG7MoXZ1W4PkPz62xlKjOshfN3krMvFPMgKCqeNZNLdNSi4Pj1xMkJruZ2ngXP6SaSljZ4I760kOgqQP2+XLfbfBuhyetEIOTZjTSVUBAMUMp1ixudzzHptvgZVdnMxz2RamkdZYwSIqqF1jVxe3ug/dv8ADAXMqOqymTiz1nHlWRlU0ihSjC19JA73Px54dKn7gcuD0DL+2tTQSin7Q0ksLDbi6LfMciPli7mOYV9ZH7TR1UVRQkW1U9za/iq7i3n88YTJu3s00a02bQJmUNlFpVGu5IXn8euD2W0mT1s6VPZbNpcrrmUMKaRrhgfLqNvP4Y7yg1zYmMos0MHZeGeWMnNNZSwqIxGjqwFu7bfTy8+ZwUruzeVVl2kpYozbaSIaHX4jGdzCfMPZTS9oYqmlW++YZduhH113t+fHByGsjpcpimoaqOooYYwrMg1sOVjtbpcm4xwu1ydFZ8A2go6mGWX/AMdzpKnhMVkhqNjcXBBYbdDzGCa59we52iy2Snv3TUqNSfaF7fnbFehy7JM1r/b6WoaQmzGBZdMdxuCVFrm+NLyUlSGVuat+fxw1NicUUYYIaqITZZWJIhH7Nj9/+MRvEyKYahSQ3NWGzD+hxDW5CstXFPQ6aGTXeV6clWYee1j8cX42r6RNNTproPKMCUDzF7N8LHDyJxAdX2YyqqBZI2pW6NBt93I/DASt7H1sV3o546peisND/h9+N1EtDVm0EpjlP/qcaT9k74EZnB2hSs4GXLThFNw6uCFXfdwRffwXw54j6WlU+xzl7TA1EFVQvoqoJYiejg2+eGcb6S7Y9QZoJafh1MsLtaz3ACsevdOAWZ5HkEqcQyx0rnbVFKoH2SbfdjNPQTXxFePlGM16+TWww/8AG+L1ZlMUEtoMxgnTpZTqA87Aj78OgpkpzupkJ5atreeCn6dqJu2JxnqKUerIKajLKJZTpivffmfxwQ592NdKnkv44lghaU2RtTf0H4YL01HSUIilq5FDPcrGNi3pfkPrH4Y9ilp6GijeXMjJerqXaPESjR5WeC1TUALGu7ki4Xrv+A3PiL46cyprPDSxvECAHkAAaQD6W3Ly5DDK6tnqJ1fjPFHGbxRROVC2/qeu+M/muZU2XRqzIZJW7scYa7sfLHmanWVa8+HwejRoRor2oLSSyK36uRlU72DW/vhYyn6NzHMCamrzJaN3O0EcwAUdOvPCxnxf6zvkzf8AZymzChgL1s1OsjG4ip0ATwG3Nj53xUzfsz7TWtX5VM0FW5LTLI7NHKLWsbHbpzPLpi1m+c0eT0UtXPMmgX0qri8hHRfHFqgrRmVFBMgaJZU1cOQWIv4jrj0HGL4JuY6hqmyeBcozWhky4BTplgN0ttyJvY/P4YN0tDQ8KB9IrFAussrltf8AF1+O3lil27go82Sly6XMOHPr1xwqLl9uYW9x435c77cpMg7NxieOTLM7ZYSoM1LIEZifQN3f7csQ1JDiwd2krc7hq4Wps2Wjhv3I4odKKB0t7vxYnyAxk8/FVm0/Gq5DO3INflb+mPUavNMly+tagnqYhOCNUZW4a45EkW+BI5dbWxne0HZqHMkb9Hf6ZnG6hiNXqenrY+mO9KcIHOpFy6HmU6VEQDovF02HMFhY+I36efIYnpM1Z6WWPlpjEagkDT71vl8MdrslzLJZz3WK9LDmPT9r4XxVkSCqUGZLHb9ao/rjRu+DO4NcM9B7OdscwhdlSp48I06Yqj03Abn49bY1GXZxkmYOsrJJkuYyftcTTdvAkd1v4vDHisCz0a3phFURFrnYG3w+W/lgjFnCVMcIM3BYSA8OYkjaxtq8L/1OKdOnUXhgqs4P7Hu1BlvsdTxooqYPLuZ4iY9W97mMbE/WUjBCKaoWqZZYgsWkcN1kFnPW/h/3jxvJ+02Y5Osaw1Mg4s7MI3bXEqlja5PhyxvMk7W5dWsZquJopFJjadCZEUiw2B3X4Xxknppx5NUK8Jm1EmHq+KUU0D0xqEniNPb/AHVa629eWM7mna5RIabKADLY/rm3+Kr19T4YiMJSdrFynGKNNm1dl9LShczMbI26RMLsx8hz+O2AC19VndLbLqg0tIJmh0szF2spN2c3NulsYaqzPXPE1S7TVjSbrxO6D0DN5eAvgjkfaOrppjTVNLK1PHM0xmijvYAFdKre5G3Pns3kMaJU1SV+5nzU3iTdoKJMmjSOpkDcU2BRCdO/M+A5ne3XBCn7L66cVAr4BGRquouB8Rt8sCs57TSZppp6QBKZm0ljYg7E9fe5EdB64Fk5lEzGjrqhWcBd3sQAOmOf9QqLhv8A4S9DRfLRof0WWmMEKiZuEX4ynSrAN0vb1xWp6Spmk0RkadWm9tQ1eFhz/PnjJQ1Oa5dM5fMagRnvsTe7G9+fI3Pl8MERmOc1k71U1T7PI6aVjXmgNuvS9ufPHWPqM1HkipoKMmsUbfVSZTHoYpLVKN12IT16E+XIYCVdaZp2mJeQyX3fnjNtPWIP9QrMn0ravvxVr87eKNYKRWMz+6zLsAB/nHmVak6sryNUYxhHFBHNs7FKOEl5KqT3I1NrDxY/k4r0FKICK6qmMle/UjuxDwHgcVaKiWnJmkPFqGP6xzzGL6c+p8uvrjM5OPtSLSLOq5La1FzfvczhYd/rJwDRUqvGgCltF7tbfrhY57MirgbtFmdRX1MWTSpBTxKRoiiW4ZVFzbYDqRY25ehxu8nmy6jyylgWZlZzpVSCWJ2vuFA6j/OFhY9pc8s4ojbsvTLXTV9RLPLUOWJYSFVUf8Ra9thv4Ygyvs9NlJZKesZaYyBwyALLIeupxb4ADboRhYWHcqK5Iv0zlHaesNBUULzKiE+1gBHRRexHWxItb5jFGuy/NeyiGppqhKvKrg6JCQUU2t+R8sLCxnqqzujpNFmgzygzmNKeph/WyHS0ZGpb+vXw5D4c8C837FRVc2rLbiR2C6C1r36XPP4/MYWFiqcnYnrEzM2TjKWeor3ZGUlVjSxD+R+PoPAnAkGDMJ2imh4M7HusDqGFhY1qTtYyySI0WvpJVpo2DKb2Q2KsOuxxq6HNI1o4ZpY14UaKTJFcW7tt1P8An0GO4WNdHq0Z6nDQQglnDifjg5eFUtde85Abc/Ej5HxxWrszYU6FF4aTMVTSbyMbk8zso2Pz6c8LCw3FK48nwCaejqcwraeKG71AZWjXUBpO/O+xscb7KaWnyGuamrZPa6x4HMylSI0sVPnq64WFjzJydjbBI4K/L58wjiqcnhSJRvLBYMCb2Pntf54MJkNJVRNU5bL3SbASKdjhYWM69z5Otxp7LsqFqiSBQOoDHCHZ2JNIWeGzrqXUrf5xzCwYRC7IKjJHpoRO0KSRWvdCLW+Nj92AFXFlMz34csbnbUrf4wsLESil0KvcrxZBJWVJTLaniTabgSjSbAfS+XTE1JkuZHN4KSqAiRbtPICGNgOQsfHHMLDhFSfIjYxyx06CKniPDUbWNsLCwsaLIg//2Q=="
                                class="h-full max-w-full"
                                width="72"
                                height="72"
                                alt="Spaghetti"
                              />
                            </div>
                          </div>
                          <div class="grow">
                            <p class="mb-1 text-sm text-default-500">
                              Spaghetti
                            </p>
                            <div class="flex items-center gap-2">
                              <div class="flex gap-1.5">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 640 512"
                                  class="text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M320 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L320.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L320.1 439.8 191.8 508.3C181 514 167.9 513.1 158 506s-14.9-19.3-12.9-31.3L169.8 329 65.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L227 150.3 291.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L470.5 329l24.6 145.7z"
                                  ></path>
                                </svg>
                              </div>
                              <h6 class="mt-1 text-xs text-default-500">
                                (6667)
                              </h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        $67.99
                      </td>
                      <td class="px-6 py-4">
                        <span
                          class="rounded-md px-3 py-1 text-xs font-medium bg-yellow-500/10 text-yellow-500"
                          >Cancelled</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        Imly2311
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500 hover:text-primary-500"
                      >
                        <a href="/yum_b/admin/orders/a657a0">#A657A0</a>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-800"
                      >
                        <div class="flex items-center gap-4">
                          <div class="shrink">
                            <div class="h-18 w-18">
                              <img
                                src="data:image/jpeg;base64,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"
                                class="h-full max-w-full"
                                width="72"
                                height="72"
                                alt="Mix Salad"
                              />
                            </div>
                          </div>
                          <div class="grow">
                            <p class="mb-1 text-sm text-default-500">
                              Mix Salad
                            </p>
                            <div class="flex items-center gap-2">
                              <div class="flex gap-1.5">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path>
                                </svg>
                              </div>
                              <h6 class="mt-1 text-xs text-default-500">
                                (4325)
                              </h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        $21.49
                      </td>
                      <td class="px-6 py-4">
                        <span
                          class="rounded-md px-3 py-1 text-xs font-medium bg-green-500/10 text-green-500"
                          >Paid</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        Imly2311
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500 hover:text-primary-500"
                      >
                        <a href="/yum_b/admin/orders/8cd211">#8CD211</a>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-800"
                      >
                        <div class="flex items-center gap-4">
                          <div class="shrink">
                            <div class="h-18 w-18">
                              <img
                                src="data:image/jpeg;base64,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"
                                class="h-full max-w-full"
                                width="72"
                                height="72"
                                alt="Red Velvet Cake"
                              />
                            </div>
                          </div>
                          <div class="grow">
                            <p class="mb-1 text-sm text-default-500">
                              Red Velvet Cake
                            </p>
                            <div class="flex items-center gap-2">
                              <div class="flex gap-1.5">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 640 512"
                                  class="text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M320 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L320.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L320.1 439.8 191.8 508.3C181 514 167.9 513.1 158 506s-14.9-19.3-12.9-31.3L169.8 329 65.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L227 150.3 291.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L470.5 329l24.6 145.7z"
                                  ></path>
                                </svg>
                              </div>
                              <h6 class="mt-1 text-xs text-default-500">
                                (6667)
                              </h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        $463.61
                      </td>
                      <td class="px-6 py-4">
                        <span
                          class="rounded-md px-3 py-1 text-xs font-medium bg-pink-500/10 text-pink-500"
                          >Refunded</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        Imly2311
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500 hover:text-primary-500"
                      >
                        <a href="/yum_b/admin/orders/5191a8">#5191A8</a>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-800"
                      >
                        <div class="flex items-center gap-4">
                          <div class="shrink">
                            <div class="h-18 w-18">
                              <img
                                src="data:image/jpeg;base64,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"
                                class="h-full max-w-full"
                                width="72"
                                height="72"
                                alt="Espresso Coffee"
                              />
                            </div>
                          </div>
                          <div class="grow">
                            <p class="mb-1 text-sm text-default-500">
                              Espresso Coffee
                            </p>
                            <div class="flex items-center gap-2">
                              <div class="flex gap-1.5">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path>
                                </svg>
                              </div>
                              <h6 class="mt-1 text-xs text-default-500">
                                (1055)
                              </h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        $333.31
                      </td>
                      <td class="px-6 py-4">
                        <span
                          class="rounded-md px-3 py-1 text-xs font-medium bg-pink-500/10 text-pink-500"
                          >Refunded</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        Imly2311
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500 hover:text-primary-500"
                      >
                        <a href="/yum_b/admin/orders/6af783">#6AF783</a>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-800"
                      >
                        <div class="flex items-center gap-4">
                          <div class="shrink">
                            <div class="h-18 w-18">
                              <img
                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAxAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAEIQAAIBAgQDBQQGCQQCAgMAAAECAwQRAAUSIRMxQQYiUWFxFDKBkVJikqHR8BUjQlOCk7HB4SQzcvEWQ6KjNFRj/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECBAMF/8QALhEAAgEDAwMDAgUFAAAAAAAAAAECAxESBBMhMUFRBSIyFGEzQlKx8BVxgZGh/9oADAMBAAIRAxEAPwA6aRk92oibyW/4Yjalcm504siHDuD9XHuZ2PKxKPs+F7Pi/wAHDhD9XBuCwRQEGHiDF8Qr9HDhB9XCdQNsH8DHRBgiKfDhTYncK2wcIMO9nwSWkx32X62DdHtg32fHRBgh7PhCHC3QVMocHC4GCHBw4Q4NweAOWl1dLeZvhNTaMFBF9XHeB9XCVUNsDGHHRDgv7Ph4p8PdDbBCwYeIF+jgrwFxzgrhbw8AWYV+tiMw4McFfo4XBXC3R4Afg44Yfq4M+zrhezrh7obQE4OFg17P9XHcG8G0VgMdCt0xZEa/WX5b47wvqtjPuHTBlYLjvD+riyI8OCYMx4MqrH9XEgj+riwq74dpwswwKwTDljbFgLhwXCzHgVtO+OlMWQmE0e2FmPEraMd4eLAjw7h4MwxK3CbCCsMWuFjvC/Jwsx4lUBsd0ti0I8PXUqlVZrHngzDEqKmHFfo7HxxYEWFwsLMeBFHA8ikhbgczhhjsbYs8PC4eDIMCtw8Lh4tqF+jh3d+jgzDEpcPHOHi4UwuHgzHiU9GFi5owsGYsSiNK76l+0MImP94v2hjzBamVUJHEIANxpF/X0x0VrP7vEv8A8Rjmml3OuLPTNUX72P7Qx0PF+9j+0MeZe1uTZ2bb4fcMO9pAGoSvYDvMU9354eUfIsWemh4v3sf2hjuuL97H9oY82SdHOuOsVkPImNt/u9cSl4FZS1cjC4F0if8ADBkgxZ6NxIv3sf2xjvFi/fx/zBjzkzU4Ma+3bE2vwNlA68t8OaupoywatsxB73sygeu4J3wskPE9F4sX7+P+YMd40X7+P7Yx52cxRFaxia4O5p1uefT++HnMo9Kf7eq29qRQbcut74lyHieg8WL9/F9sY7xYrf78f2xjzk16OwsLLp7p0KNR+C4YK0HT39S6iBYAb/LBkgxPSDPF+/j+2McNTB+/j/mDHnck9IgjEsczuR3iH02+WHxyZEFR3WqP0gjEN1tvfx/O2LWPciV0eg+0wfv4/wCYPxwvaoP38f8AMGMLr7Mpr101VfeweU77+TenzwjLkC6dOUu4c93VWLv/APbi1GD7k3l4N37ZB+/j/mD8cdFVB+/j/mDGXo8tyqdCWysRW8Zg1/TS5xP+h8tXdMvT4M344eEfIspeDQ+10y78eP8AmD8cI1tL/wDsw/zF/HAWGgpYlulBGv8AAThGCm60yfYwbaDNhxamncd2WI+eoYdx4htxY/tDALRAnKlX7GO3iXfgquHtoM2HuPF+9T7Qx3ip9NftDAATRY4wgf8AZ1fw/wCMLbDM0HEX6S/awsZzRAP/AFf/AAGFg2gzMZ+gc4j1BoBFCXITiSaNO3rbx8OmIIqXN0W8UMqxh7gpqAtYbi1hzwDeWeWHvBeGxAN3G9ufdBvyw2SteQItRrMfukIRt6dPycYFc0tmhilqvYhNUTtwgDzqtDXBt7p67jxwN9osSYSxP01Yn+w/JwLn4Slnj4pWQkBJWDfPTYjnz/rbDKcRiQi7qm2nQxP9TyxQJhP2qVmbhlRuNFzpB+43xPBUk/qzFHIxZb3Pec+Xj/nFP2h4mIgrGSO941CC5t/H69MWYKTOIpIqyOLhvuUm1BWsR5254mzfQLlqenrIIeLUUoQDd2kspIJ2NvLElJRT1ESzRQMyG+4ivv1t/wBY5XLm1UE9qhViFKh1aN7gm5tY9BiI+1xBoEpK2ES91pUQltIN+6wFgTc7/fblPvXULorhuCX1IhLDUOKCGA5Hb888X6cvFUpxzIsbISNNroCD0ty2wOkr3pWaIkPTxxKh1nYgD9oW8NvnimubQQUUlNHIUid1Zw7MzG3IDfYemK9zALiZVZkmeYDSWsAWBB5csScORIpJFeUxLbUCGFgfXbflt/fAWKpABL1bwNaynhkhvjfzPTD1zN1YKKgmQLpDA202HRSbYl5dguHGoa0SrHEBJJLu66ibfKw+/EccbSOFFPKLDvnkUtv1Ntvz44F+3VESiN6qRLnfSO9cnqb+fLDdTX4AlPEUkd2S+/ry8Plgu0PgLyBO7ebbSNI8R66rDESaHk0F5AALErFcg/A457HUI6LqUtpBLLMusgWNt9vH0+GF7DPK6tDwpFZwEtUBmI/v1HL8Q1OwEhWAJI8dZEXI1IjqRfn9+xOFB7b3BDJDGTySKo0sbX8beGK8VMZAY5a+liAGs2kHeNuR5fj5YMU3ZwNEVnrG46aWjkhnAYob7C4tztf5Xw92wsbg8PWVDniggI1l4lSPe8t/O39MPMtWikw1saLYWJqwNxyFiQTizT9n/aKxmnDrTBDYiYayQdtQAI3735GG5Y2V0slQtRHO8SESLMbKrgXuOQ35+trb9Vv36BgcXNMyhAMeY0qmWxszh9uV7C4/JxdTPsw0xxxBqvSBqeNApY/RN7jffkB9xxVFRDUVhnp6BavL4ogCDGrs7W6EC4t4dLb7Ye9TK9KUyOFaMqTxFdgHYbi4JPu325DfqMH1EuwsEyyO09ciE1GWnutZrMVta3r4j5jD4u1UkhCvluo7lrNfbyOnEAqIGpY5M1eGep1NpVJy4DeB08uQ29MBk7QT0zslOsEYZjdQtgnowHphx1NSXQNuJov/ACanfd6AA+F2P32wsZeozyoMznL690gJ2CoGuepJKk3wsdd6YsIhYHJVyekrTlc3FqIg6xLOzWbqLlvyAcSGkeGplK5JDLHuY1WGJjyJF7edvliycmigy6KkqFpYSp/VvVTM5F9rqLAX323xby/sfRJDrnr/AGlzurUwVSDzPdAO38Q+/D47LgRTgirgyxSZPT01O1gWfhjS1uejmRy6fdhuY9nocxqIzBWQUqIh4opKVtT7KSWWy2sb7fW+GCdT2UMdxDmaR3GtEngBYcjsbvvcA8r4zdWmaU7zHMpZ2p1Nyf1qByLDmANthz88c5TSKsD8z7NU9MzQrmDnQLnXFa3me8PpXwbTKs99ihjpokkjdLpIGJBFrA33G/hf8cBaesy2pzKBamNqWB+9JI87Mo5gbEGw3G/l0xs6WPJXHDy7MoWZCFZ2pwL72BJsLm/nid5x+KE4XMtTR5jQ5mslYFVqWZWMSvaQXUDkbXv08sE6bMK6alt7BWuyiVNTgDmxIA1Hfb+uCec0WY0kkMeUyRSwSfrXkXSxY23BXV8b+XxwKostrDCzVFdLre4bQ+ldzfbwG3Q4iWrmvkhbaRVmyWnqaj9I1M00LyuGkp9Csu1hY7WINvHqcNbL8nad3LVIaRiuhRGqX8BbcdMFEyCn4XDmkVnLs5NxuTz2a/8AfF+loIacMsCQhCuk2Ivb/OMr1PN2y+EZr9HZS6QWlYmSxVeLKSy+PX8i2BsWXxVLCKJa2Vkuzukofug78123tjdU3Z/K4wCKaypcrpa4B9L4maOlpo9V+FFyG6oB8euLepuuEFjz6pyN1VpIaerFxqcSxKBpA6kHmPTocdo+zc0nsw45jSUMQWgZgRvubbcvM88bn2yjERYVkFgSDeSx2F/7HFGo7Q5ZQyzo8s5MfMhQVOwOxNrc/uwt6q+EhAB+ylVESYM3hJ8GiZb/ANcQHIc3j70U9NJIpJXS7Ag/EC2CtR21isVgpW4jd2MEhy1jvsP2uW3nhk/afMEnMPs+gyjUsnDB4YI2JGxHQ6j9+GlqPAcAWTJM6ii0+zR7i+uOSNWF+guQf+8MRs9ptP8AuKqiwu6sEvY2vc25H54VZWNVBzK0chBKlmYtqPS/Kwv/AHxFS1FQ4HES+k2XQurST945ePwxoipfmsBxcyqVBMt9WoMkgfUVNiCQd/n64ZJ2hdJifa6luID+s2J3vz/r+dtFBk88s0AD1YEcVzJ7o3YalFhzCljsSCRzFzgvJkypDHwswmVbEEzMrdbg6RfawI9beeK9q6j5fQw9H2leCHgrLfisNUmi2kDkLfn797OXVtOFnhgjBldC7yGYlV32JFiAPe5X3I5Y2EfZ2liqT7TK00hYMkjwrGBblbcEXJ5WN7D0xMcqyyZ2SLJqWSoLXl7ttSatzqNugvytv8ovHsPFmXnr5kpYVaWlqo4VILxixTc90k8+vht586a0NXPGJqSlapUsLApYJzI3B+GNtBkWUgozZfQwoTdx32fkLi3d6+F74s1C0kNLHHTZfxtJW1pLaACDps1hva3z+CzjHgMWYynyemWJRMrK3MIKhO6PDCxuFnr2F6aloEj6K0ZYj1Kgj78LBn91/sMQSpzN3C5fmkKRRssaxpGxh1dFHfJJt0xUNHmftg2y8SODZEiZGYXsQCh5/EE+G2Jqf9JVIbjU880sS6ZXgJ0ykkXtoVhcAc7Dw9b1P2dzuqVGhjmpoZJVeeCYhbBfduTcEbC4Crz9cd8pW4FimMy5O0UEjey5nTUyTHXadm1Ob7gBxcjba+LdZX56Q1PPVSySiIAmKEIhbr719jfw6csR0mTVNa+pMy4Y4KhJOE6gPfUS17c9ha3QYJvVplg01mXQSRsTealqib35k3xDUpdCuEDZYKGrgaCvEbRl+5xYgDyN/dPK/kvLAauy7J3pzx4DdQoOqRidN9K6QdyPU7AY09Xm/ZumhgmqoZXCj9SrqGAsLdDbr18cMlzjs/PLxYcllqZNjrhptl8Lttyt8MRGnMHKJm6ejly+NZoo6a0k4jjWamW5Fri7C9h0tzBtizW5rPl1VLS5pHOg5kUs5IXzIO+CFFm+WNKxqqYUCUzGTgrPx3dr+8yD4Hn8BjJ5nQQziPMKSZpKeaYDXL+rNyd9Xe3+G/PwxE4O/JLs+hI3aum9uWnooJJepLuNr7m1+ewJxa/8kqjHR2pYgZXs9pUOheV+e/X5HATNcono6taKpbjVRiB/VPdgtupHl4YhosiYsrVee0UUaR3smp7qbgsLCx5n82xGzSYEmc5/LWSeyujqsw4YVN7HV4736D/vFWvqcwMop2aOoWEKl4we6QLHoL+t/U4Kf+O0UPsrw5gZUrCzpFKOEFtudJ5sOndwfynI8hcKr5vSrLqBvGCjbHYXcjwtsDyx3hCKVkgsYhKWoKWKu4OxGysBe/xFvD5YvRwPFVGaSKNkJ2WaTuDysTz28x16Y9Wouz2TpYCJakLcqzEML/wgKcWf0fkaMYrRwzBBtxAGAvta98dF/YVjyWjyCpr1WeqpCgIZ3udSxWF+YNhyPP8AxgzJklI0sNRUZiGhUWMUZMga3PdT49PMeePQqnJYyqy/paogjPMSsuk+vL+uKMsWSUkdZCaiaVpRpcIANa23A5Drzvf1wlk3awmo+TMLkGRRaZWpHd7ELxh7PfqPe57X5+BwVkWgpiiU1OoULqcU8WpuYvudgLdbf1woxlMKSPDSJwnuBI7lwd7cmvvfy6c8diq45ls8kTEKQtz05bagLG3hjlOUYO0rlJrsUa3tbktLO1HPHVTpT2DBFQEbc/eW4sfA9caCGbKZg+nMaaKnvrKcSNWHIi+9wAd/jjEz9iKKVi1PmNVChO6vpkVQeVrjf54FydnDbiQ1jOTbUJYhHYAdAL7+WNWema8HGTqxdz0ilq8kKNFlk8NQ8W2qOMME5W3JHl44oVFwplmn4bNZSqMgJvc/EbcsZTL8qjoZhMKmUzAWLJ3Ab7dN+vji+yqGMgUgsdyRe/xx5tfUU72gXGcmvcEpPZ4xdJeL/wAQQfm34Ypy1tSCRBBpA5MtpCf7fdisxttiFz/yxjUwci37RmMveJqPCwFgPLCxREjAWDN9rCw8kK4bpKt8liqKejmeIrErtve7MWubn06YNR9oI3p1asr3iOjc2uXvtsNXy2xiB2SzESTS09fJVJPbjPFDclug6sP4hiCg7NZ3lzyLDWyKAChNPG0jMl9hddgRY7Ejnyx7TqQcE0XaWRrp+0VLxZI4IKipZDZi8qwhRtfmBt42PXGfzLtXTVlIb01DGhDGzh5HLdT18t9WI5uzEMFLxKyqKtc6UrKoQ7eYAJtbe1+WIYYsup6OnSeg4iszCV4aW6dbWdxYfO4sfXHLesNxfcFz1YzEU9PR0rPIi3YRx91gebW/PLBLMIs/q6hZKiljjJW+gkyDmbHh3bw27vTF2WSkoCrw5ZRQpZV4s87y7/8AHZb7fSwQ05isjyy1jwR+8qi0QPoFF/mw59cS6/cFACfoysy+E1tZXTwib3+Aixhr3O19J6fRvvthrJR0VNFSCKWsiZuKhDPpRtumkDVbr9+Js9kpRC8XsCVFXLZmnZlDD1PPf+LBTKckM7M0eZw00pQAwH9YyKPDVYjpyxGeXJSXgdlWeyaKeNMvgFSWIQJYEgWtp0KeSi19sFJs9ilp5BDlVWzlmSRrqtuY1XJ3H34rVmRSNSiDKszE89zrlLjiEG3d6gczgLV0s1GVZ8vlaoUMUTg6lN9+d7Hr0xEnNdB8h6Wqoq6IxUdII50BAd4WkAJtz03v1xks07P5tNLLIstFPM0hdzA6pudrWO69Ba3h4Y0c9JHSZdHW9oJpqSmuP1WpRY+nQeYHyxO+fdmlnWUvTVc7peIQpxDYDrqv0HQX88d6Kq9bEScX1MXlOX5k8yy0kdYkZO70zsLt5NYC3SxxL2khqxV0zVdNVRAtqqJJg4HMAd47HrjRZn2tdiEalpaaEbLJVvuRcGwvvbl+z0544lMM2geHP5almDnh+/GirfYBQeg626+WNjUox5RxtF9CrS19FTxzMKh444z+r1NbUtl628dt/W+Hy1UMCMVamTbucRyxI6e6GsOXvWHnh/8A4vk0CSRpQ2aTcOZd/wD42FvO2JFyPLstp1mmqeA8LDQXQykC9xYnbmefoMPetaw8H3BUFVmNZq4jRUsehtTzqbA+DdBvzGrnt42lK17w8SkEdamlC0g/Vje+rn4W39R52IV4jqo6mPI/9ZmSoFKmw035PoOx36W8MckynOpsvEOcywZfSTII+BHEXc+KrpsBfzPXGStCNV3mWoqINq6magWN8wpnpkcd1nIb4XGO0mcZrLEkdDKpg94u0QiuCeRY3YgW6DcYIey0WVw6jlVZVmMW4lRd2UdNKXAX545MMtq2eQxzUwJ7psV+YBNvljLgqfxfUrBPqMpF01AlqpYagLe0MaaY7+f7RwXoY6bMJEp1iiDseSzEafHnfAZ8ml9+lmEqjcmOVZGA872YfLFKpgeRSj2AOxIWz+W7ghfgcVCj+o6NwSsupvZuxkNv1VawPgyAj5jFKfsZV3PClglXb9qx+R/HGDzWpzeDKVhy6Ss1KR7rklht3WKnSfLbmfPFjsj2q7RUktRHVzzSsEvHHLuNrjm2w3P/AHbGr6SjJXRnvzyah8hqYJZIuFIzKe9oK7bcj3vC3wthYbH26rAv/wCJTjc/7csdj4k9/n445jn9DT/jHdBaszDgRMtchUMpKo19LfcR88ZuftbUUmUR1FXTmGQzmOMRldJXfnYE9LdBviWKiYxcKOUNBL3jFwuIji43K8j8cQtlkb1NuBMkVId0pAscVx1ZTci+/Jvhjhuy7na4MrswmhzsTNTUcRhBlqRToNTXHUjUQRz39b4hos5q6jLpKwrUuqy2R2v305e9yvv1xK9MaP23N04NLNMmkS0jSTcMHmSh90bc/XfFSvgkqOz8Ei6a7MIpPecgEIdgDc72O+/ifHDljJck3fYL1D5W8hpK6dWrjpkRo3LjTfrbbpzvtv44g9gjizCOVMwVok5RzcQqR4Gyi/PqemK+X5DPxJszyivjqK/h2MGoDh2vtfcHcHnYHni12WyeqZJ4c4jeHSGcyhSzk7GwF7fd054mVJ2sgOwrLX5wKbhqsKqT7SqqAB49CF25nEFCuX0eeSUiVGZPSSppeVtk3PPl7vhvzxdTIs2vOmU1bGlltrWsRkuRy2AvbyPX4Y5JQ5ZGsiZlLJmEoULJFRkhRzsDYjqf6bcsEISj1GXMkyKlHaCXh1lHVUWrUIhLdr2J3I8NsF8voa+grKuSOQTh9aOz7CM90qRuCTZibegvjN01UQI6bKoKbLTJGZI7xs7W0sdTEi3e5AXvfywRo8vqeD+kJs9iFQFNpGqGbRIR7ygd3ltuh525Y1Qje1iblzPsup87aSaSSGddAvGIdRUgEXuSD8RywIy3s9TxR6UeOB+ghHD1DwL+8f74z9T2nfJM2lebMfbCzgyqi7p5g9DYD1+/GwoK6mzemjqKGSM6+aDk/p4H6pxobnFWuQsWwfX5DllXA1PNTrTzD3KhU76nwa/vD83wJp8yruzsyZfnqNLRf+mdDqKr9RjzHkeX3HU5tE75aBWVAo1OyzsQrWtuN929BY4GJHTUlE1IitWRudZlzABY2bowQAufjpvci/h0pqUla1yKk4w56FpK2oskWXUjZhHMLxvGwC266d7ix5gjn6jFv9IU1NxkklFRLHuYICsjJ6kEKh9SMDZameeMI8ganAuYhEscR8O7uT8WPnfFSWUFdOvikbBBso9B0+WHNUaSvVdv3M71Mpfhq/7BBu0le0tqduBH1CFWkJ23L2Av6BvXEVTnlRKP9RUMCFsUibc/H/PwwKk1ts1lH0V2xHwl8NOMNT1GC/Cjb7sap1Jc1Jf4CFPmEMLjXA+nppk0H+hwV/SeVyUzBRWxVBB0M8nEUH4EX+Qxm7AbLvhjX/axlfqFdu7Z0VKCXBp6GOGomVJK+JYyN2Wdg59FZf7jF6TIm4VqaaCYkd0Spy9LA/k4wpe2w/HEkNbPTm8MzL/xcrjvD1KfVoW1GwezDsxUSOH03KbhqaYo19ugNug6YGezy000i1tTOQ4tw6yJW3HI6rDpfoeeHw9pcxhtqm4g8JRcfdbBKDtgskfCrqMSoRuUYf0I/vjUvUKMvnEnakvjIzs2TU1VIXbLaJiNr2Vb9eVx4+GFg1PVZHLIXjnq6YHnEI7gHytfCx3UdPJXTZDrVVxwX6T2RYiTXROP2lSQaT+OA/aHOKmmQw5dSCVNg8iG6DY7W29bjD+yvZOeGlbjLJFJK1zxHErkb23Fh18MT5rlmWTVwomizKunQrqpUDBfU8tvMY8yNNr2s9B3aM1lFFV50aqSp0VEJu0cSsS0Z9AbLsSN+n3zLk8dEKjMMzy2ohoETSqzVCXZjsLL5c97+hNsEjRVkFeKhwmQUKR8tSi4HMkX7x3Hny2OK02aZC5kWaLMswmjkZYiZO64C2uCSBb3hp3wKEUwSCeV5llOVRSS5bTVkrTXBjijY2AY2Fz8vHYA4upUdoJmmlWOiy+FirIat9TWtboR4Xt6YzWZ9pc1WngFBSwZdTU7awUdbkgEWYEg3OrE2WZRnnaLXO9VLvbURIBp28b35HzxWSXQYTqmpEp1qZ87rJ5mYHiQy8GE8uV+lri3Pc78rSUnaqlY1dCuXzz08wC3ppWaSQsDqGonc2t1HPrgpkPYHLqAq1WVqGUbWQDT8f2sa6koaWlFqWmiiHgigHAovuM8+l7J5jNRgUbTUdOECJFUrfQDfbbfa53NxuR6117PZdkeXk5tmUtWkj6lhZ+HHr6C1ybbeOPR6rNaOhDCWW8ij3EszfHwxnZM37P9ouNTVUOggkXNmBPiRuPmDjrGL/KL2rqgPUUfZqootdLQUNawI4pp5Qqg2JPe2Hpcjc88B6dKPLjL+iIxRxy/7ghvI55ftPdF+AfyIwczXshXpHxaCdMxpl9xFsmgeS+78sDMlymTMKyphq+LAKdQGGmzBmvbY+h6eGN9OnTUMpO/2PNrVqrnhGNvuQRziOb2kX42mxnlJaVh/wAjdvkfhhj1wJvGhv8ASIxbr+yeYxNxIpFqv+R0t+H34FywVFI+mrhlib/+qkX9DjzdRr6/xj7V/O50jpUvnyybjSv7x1D1w7UP28Qh/T+HEgF99R/ix5MpXd2+TuopLgeGH7Hd88dJP7RVvuw0/VW5wh54m4Md3bctP3/fhpiY7htjjur4eeEW+OEBC8X1b+eIXixb14dHE1QbIlx1Phi023ZADeE1+7ixFRsLNOdKnfSBdm/D8+mCSU6Q+6NTj9q1wPh+OLdJlk1cbrEWJPv2vq8ef9dh4nHt6X0zjc1DsvBiq6luWFJcgyK0a6UV1W+wU/153wsataDL6dQjhpWtctHwiL+rqSfXYeWOY3/W6aPCiL+nV3y5BBayiNP7LKzqj+8wuL+vXFumoaWlpbZUsKFr6X3Nz59ced9ms0zTMKg0LUjVDqdLtdQ0FtjqJ2Nrjz9cbSniNDJrkqOGR7y30r8b/nfyvjzVLJXPWuAe0vZesqWevpapJa1k0SoyWSRbcgCSAfuxgogaKrfhUrIyyfrKSTSHQWPLluSPz09iGcUUkbG7MoXZ1W4PkPz62xlKjOshfN3krMvFPMgKCqeNZNLdNSi4Pj1xMkJruZ2ngXP6SaSljZ4I760kOgqQP2+XLfbfBuhyetEIOTZjTSVUBAMUMp1ixudzzHptvgZVdnMxz2RamkdZYwSIqqF1jVxe3ug/dv8ADAXMqOqymTiz1nHlWRlU0ihSjC19JA73Px54dKn7gcuD0DL+2tTQSin7Q0ksLDbi6LfMciPli7mOYV9ZH7TR1UVRQkW1U9za/iq7i3n88YTJu3s00a02bQJmUNlFpVGu5IXn8euD2W0mT1s6VPZbNpcrrmUMKaRrhgfLqNvP4Y7yg1zYmMos0MHZeGeWMnNNZSwqIxGjqwFu7bfTy8+ZwUruzeVVl2kpYozbaSIaHX4jGdzCfMPZTS9oYqmlW++YZduhH113t+fHByGsjpcpimoaqOooYYwrMg1sOVjtbpcm4xwu1ydFZ8A2go6mGWX/AMdzpKnhMVkhqNjcXBBYbdDzGCa59we52iy2Snv3TUqNSfaF7fnbFehy7JM1r/b6WoaQmzGBZdMdxuCVFrm+NLyUlSGVuat+fxw1NicUUYYIaqITZZWJIhH7Nj9/+MRvEyKYahSQ3NWGzD+hxDW5CstXFPQ6aGTXeV6clWYee1j8cX42r6RNNTproPKMCUDzF7N8LHDyJxAdX2YyqqBZI2pW6NBt93I/DASt7H1sV3o546peisND/h9+N1EtDVm0EpjlP/qcaT9k74EZnB2hSs4GXLThFNw6uCFXfdwRffwXw54j6WlU+xzl7TA1EFVQvoqoJYiejg2+eGcb6S7Y9QZoJafh1MsLtaz3ACsevdOAWZ5HkEqcQyx0rnbVFKoH2SbfdjNPQTXxFePlGM16+TWww/8AG+L1ZlMUEtoMxgnTpZTqA87Aj78OgpkpzupkJ5atreeCn6dqJu2JxnqKUerIKajLKJZTpivffmfxwQ592NdKnkv44lghaU2RtTf0H4YL01HSUIilq5FDPcrGNi3pfkPrH4Y9ilp6GijeXMjJerqXaPESjR5WeC1TUALGu7ki4Xrv+A3PiL46cyprPDSxvECAHkAAaQD6W3Ly5DDK6tnqJ1fjPFHGbxRROVC2/qeu+M/muZU2XRqzIZJW7scYa7sfLHmanWVa8+HwejRoRor2oLSSyK36uRlU72DW/vhYyn6NzHMCamrzJaN3O0EcwAUdOvPCxnxf6zvkzf8AZymzChgL1s1OsjG4ip0ATwG3Nj53xUzfsz7TWtX5VM0FW5LTLI7NHKLWsbHbpzPLpi1m+c0eT0UtXPMmgX0qri8hHRfHFqgrRmVFBMgaJZU1cOQWIv4jrj0HGL4JuY6hqmyeBcozWhky4BTplgN0ttyJvY/P4YN0tDQ8KB9IrFAussrltf8AF1+O3lil27go82Sly6XMOHPr1xwqLl9uYW9x435c77cpMg7NxieOTLM7ZYSoM1LIEZifQN3f7csQ1JDiwd2krc7hq4Wps2Wjhv3I4odKKB0t7vxYnyAxk8/FVm0/Gq5DO3INflb+mPUavNMly+tagnqYhOCNUZW4a45EkW+BI5dbWxne0HZqHMkb9Hf6ZnG6hiNXqenrY+mO9KcIHOpFy6HmU6VEQDovF02HMFhY+I36efIYnpM1Z6WWPlpjEagkDT71vl8MdrslzLJZz3WK9LDmPT9r4XxVkSCqUGZLHb9ao/rjRu+DO4NcM9B7OdscwhdlSp48I06Yqj03Abn49bY1GXZxkmYOsrJJkuYyftcTTdvAkd1v4vDHisCz0a3phFURFrnYG3w+W/lgjFnCVMcIM3BYSA8OYkjaxtq8L/1OKdOnUXhgqs4P7Hu1BlvsdTxooqYPLuZ4iY9W97mMbE/WUjBCKaoWqZZYgsWkcN1kFnPW/h/3jxvJ+02Y5Osaw1Mg4s7MI3bXEqlja5PhyxvMk7W5dWsZquJopFJjadCZEUiw2B3X4Xxknppx5NUK8Jm1EmHq+KUU0D0xqEniNPb/AHVa629eWM7mna5RIabKADLY/rm3+Kr19T4YiMJSdrFynGKNNm1dl9LShczMbI26RMLsx8hz+O2AC19VndLbLqg0tIJmh0szF2spN2c3NulsYaqzPXPE1S7TVjSbrxO6D0DN5eAvgjkfaOrppjTVNLK1PHM0xmijvYAFdKre5G3Pns3kMaJU1SV+5nzU3iTdoKJMmjSOpkDcU2BRCdO/M+A5ne3XBCn7L66cVAr4BGRquouB8Rt8sCs57TSZppp6QBKZm0ljYg7E9fe5EdB64Fk5lEzGjrqhWcBd3sQAOmOf9QqLhv8A4S9DRfLRof0WWmMEKiZuEX4ynSrAN0vb1xWp6Spmk0RkadWm9tQ1eFhz/PnjJQ1Oa5dM5fMagRnvsTe7G9+fI3Pl8MERmOc1k71U1T7PI6aVjXmgNuvS9ufPHWPqM1HkipoKMmsUbfVSZTHoYpLVKN12IT16E+XIYCVdaZp2mJeQyX3fnjNtPWIP9QrMn0ravvxVr87eKNYKRWMz+6zLsAB/nHmVak6sryNUYxhHFBHNs7FKOEl5KqT3I1NrDxY/k4r0FKICK6qmMle/UjuxDwHgcVaKiWnJmkPFqGP6xzzGL6c+p8uvrjM5OPtSLSLOq5La1FzfvczhYd/rJwDRUqvGgCltF7tbfrhY57MirgbtFmdRX1MWTSpBTxKRoiiW4ZVFzbYDqRY25ehxu8nmy6jyylgWZlZzpVSCWJ2vuFA6j/OFhY9pc8s4ojbsvTLXTV9RLPLUOWJYSFVUf8Ra9thv4Ygyvs9NlJZKesZaYyBwyALLIeupxb4ADboRhYWHcqK5Iv0zlHaesNBUULzKiE+1gBHRRexHWxItb5jFGuy/NeyiGppqhKvKrg6JCQUU2t+R8sLCxnqqzujpNFmgzygzmNKeph/WyHS0ZGpb+vXw5D4c8C837FRVc2rLbiR2C6C1r36XPP4/MYWFiqcnYnrEzM2TjKWeor3ZGUlVjSxD+R+PoPAnAkGDMJ2imh4M7HusDqGFhY1qTtYyySI0WvpJVpo2DKb2Q2KsOuxxq6HNI1o4ZpY14UaKTJFcW7tt1P8An0GO4WNdHq0Z6nDQQglnDifjg5eFUtde85Abc/Ej5HxxWrszYU6FF4aTMVTSbyMbk8zso2Pz6c8LCw3FK48nwCaejqcwraeKG71AZWjXUBpO/O+xscb7KaWnyGuamrZPa6x4HMylSI0sVPnq64WFjzJydjbBI4K/L58wjiqcnhSJRvLBYMCb2Pntf54MJkNJVRNU5bL3SbASKdjhYWM69z5Otxp7LsqFqiSBQOoDHCHZ2JNIWeGzrqXUrf5xzCwYRC7IKjJHpoRO0KSRWvdCLW+Nj92AFXFlMz34csbnbUrf4wsLESil0KvcrxZBJWVJTLaniTabgSjSbAfS+XTE1JkuZHN4KSqAiRbtPICGNgOQsfHHMLDhFSfIjYxyx06CKniPDUbWNsLCwsaLIg//2Q=="
                                class="h-full max-w-full"
                                width="72"
                                height="72"
                                alt="Steamed Dumplings"
                              />
                            </div>
                          </div>
                          <div class="grow">
                            <p class="mb-1 text-sm text-default-500">
                              Steamed Dumplings
                            </p>
                            <div class="flex items-center gap-2">
                              <div class="flex gap-1.5">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="text-default-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="text-default-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path>
                                </svg>
                              </div>
                              <h6 class="mt-1 text-xs text-default-500">
                                (1221)
                              </h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        $391
                      </td>
                      <td class="px-6 py-4">
                        <span
                          class="rounded-md px-3 py-1 text-xs font-medium bg-green-500/10 text-green-500"
                          >Paid</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        Imly2311
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500 hover:text-primary-500"
                      >
                        <a href="/yum_b/admin/orders/a6c5aa">#A6C5AA</a>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-800"
                      >
                        <div class="flex items-center gap-4">
                          <div class="shrink">
                            <div class="h-18 w-18">
                              <img
                                src="data:image/jpeg;base64,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"
                                class="h-full max-w-full"
                                width="72"
                                height="72"
                                alt="Gujarati Thali"
                              />
                            </div>
                          </div>
                          <div class="grow">
                            <p class="mb-1 text-sm text-default-500">
                              Gujarati Thali
                            </p>
                            <div class="flex items-center gap-2">
                              <div class="flex gap-1.5">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 640 512"
                                  class="text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M320 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L320.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L320.1 439.8 191.8 508.3C181 514 167.9 513.1 158 506s-14.9-19.3-12.9-31.3L169.8 329 65.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L227 150.3 291.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L470.5 329l24.6 145.7z"
                                  ></path>
                                </svg>
                              </div>
                              <h6 class="mt-1 text-xs text-default-500">
                                (1221)
                              </h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        $150.63
                      </td>
                      <td class="px-6 py-4">
                        <span
                          class="rounded-md px-3 py-1 text-xs font-medium bg-green-500/10 text-green-500"
                          >Paid</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        Imly2311
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500 hover:text-primary-500"
                      >
                        <a href="/yum_b/admin/orders/b07041">#B07041</a>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-800"
                      >
                        <div class="flex items-center gap-4">
                          <div class="shrink">
                            <div class="h-18 w-18">
                              <img
                                src="data:image/jpeg;base64,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"
                                class="h-full max-w-full"
                                width="72"
                                height="72"
                                alt="Chickenpea Hummus"
                              />
                            </div>
                          </div>
                          <div class="grow">
                            <p class="mb-1 text-sm text-default-500">
                              Chickenpea Hummus
                            </p>
                            <div class="flex items-center gap-2">
                              <div class="flex gap-1.5">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 640 512"
                                  class="text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M320 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L320.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L320.1 439.8 191.8 508.3C181 514 167.9 513.1 158 506s-14.9-19.3-12.9-31.3L169.8 329 65.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L227 150.3 291.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L470.5 329l24.6 145.7z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="text-default-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path>
                                </svg>
                              </div>
                              <h6 class="mt-1 text-xs text-default-500">
                                (1221)
                              </h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        $24.81
                      </td>
                      <td class="px-6 py-4">
                        <span
                          class="rounded-md px-3 py-1 text-xs font-medium bg-yellow-500/10 text-yellow-500"
                          >Cancelled</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        Imly2311
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500 hover:text-primary-500"
                      >
                        <a href="/yum_b/admin/orders/94516a">#94516A</a>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-800"
                      >
                        <div class="flex items-center gap-4">
                          <div class="shrink">
                            <div class="h-18 w-18">
                              <img
                                src="data:image/jpeg;base64,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"
                                class="h-full max-w-full"
                                width="72"
                                height="72"
                                alt="Butter Cookies"
                              />
                            </div>
                          </div>
                          <div class="grow">
                            <p class="mb-1 text-sm text-default-500">
                              Butter Cookies
                            </p>
                            <div class="flex items-center gap-2">
                              <div class="flex gap-1.5">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path></svg
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  class="fill-yellow-400 text-yellow-400"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  ></path>
                                </svg>
                              </div>
                              <h6 class="mt-1 text-xs text-default-500">
                                (223)
                              </h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        $72.21
                      </td>
                      <td class="px-6 py-4">
                        <span
                          class="rounded-md px-3 py-1 text-xs font-medium bg-green-500/10 text-green-500"
                          >Paid</span
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";
import { useRestaurantAdminStore } from "@/stores/restaurantAdmin";
import { storeToRefs } from "pinia";

const restaurantAdminStore = useRestaurantAdminStore();
const { fetchSingleUser, fetchSingleRest } = restaurantAdminStore;
const { singleUser, singleRest } = storeToRefs(restaurantAdminStore);
const singleUserLocal = ref({
  fullName: "",
  email: "",
  role: "",
  associatedRestaurant: "",
});

const props = defineProps({
  id: String,
});

onMounted(async () => {
  await fetchSingleUser(props.id);
  if (singleUser.value.data.associatedRestaurant) {
    await fetchSingleRest(singleUser.value.data.associatedRestaurant);
  }
  singleUserLocal.value = await singleUser.value.data;
});
</script>

<style lang="scss" scoped></style>
