<template>
  <div class="dashboard-container w-full lg:ps-64">
    <div class="background-shape"></div>
    <div class="background-shape2"></div>
    <div class="main-content d-flex">
      <div class="content-wrapper">
        <div>
          <Panel header="Header">
            <div class="flex flex-wrap md:mx-4 md:mt-6 md:h-fit">
              <div class="w-full xl:w-1/3 lg:w-[90%] px-4 py-2 h-full">
                <div class="bg-white rounded-lg shadow-md p-4 h-full">
                  <div class="flex justify-between items-center mb-4">
                    <h5 class="text-lg font-semibold">{{ $t("statistics") }}</h5>
                    <div class="relative">
                      <button
                        @click="toggleDropdown"
                        class="text-gray-700 focus:outline-none"
                        aria-expanded="false"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-more-horizontal"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </button>
                      <ul
                        v-if="isDropdownOpen"
                        class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
                      >
                        <li>
                          <a
                            href="javascript:;"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >View</a
                          >
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >Download</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <div class="mb-2">
                        <p class="text-sm font-medium">{{ $t("total visits") }}</p>
                        <p class="text-lg font-semibold">423,964</p>
                      </div>
                      <apexchart
                        v-if="total_visit_options"
                        height="58"
                        type="line"
                        :options="total_visit_options"
                        :series="total_visit_series"
                      ></apexchart>
                    </div>
                    <div>
                      <div class="mb-2">
                        <p class="text-sm font-medium">{{ $t("paid visits") }}</p>
                        <p class="text-lg font-semibold">7,929</p>
                      </div>
                      <apexchart
                        v-if="paid_visit_options"
                        height="58"
                        type="line"
                        :options="paid_visit_options"
                        :series="paid_visit_series"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Expenses Widget -->
              <div
                class="w-full xl:w-1/3 lg:w-[90%] md:w-full sm:w-full px-4 py-2 h-full"
              >
                <div class="bg-white rounded-lg shadow-md p-4">
                  <div class="flex justify-between items-center mb-4">
                    <h5 class="text-lg font-semibold">{{ $t("expenses") }}</h5>
                    <div class="relative">
                      <button
                        @click="toggleExpensesDropdown"
                        class="text-gray-700 focus:outline-none"
                        aria-expanded="false"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-more-horizontal"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </button>
                      <ul
                        v-if="isExpensesDropdownOpen"
                        class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
                      >
                        <li>
                          <a
                            href="javascript:;"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >This Week</a
                          >
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >Last Week</a
                          >
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >Last Month</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="mb-4">
                    <p class="text-2xl font-semibold">
                      $ 45,141 <span class="text-sm">{{ $t("this week") }}</span>
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-trending-up inline-block align-middle"
                    >
                      <polyline
                        points="23 6 13.5 15.5 8.5 10.5 1 18"
                      ></polyline>
                      <polyline points="17 6 23 6 23 12"></polyline>
                    </svg>
                  </div>
                  <div class="flex items-center">
                    <div class="flex-1">
                      <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          class="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
                          style="width: 57%"
                        ></div>
                      </div>
                    </div>
                    <div class="ml-4 text-sm font-semibold text-gray-700">
                      57%
                    </div>
                  </div>
                </div>
              </div>
              <!-- Total Balance Widget -->
              <div class="xl:w-1/3 lg:w-[90%] md:w-1/2 sm:w-full w-full mb-4">
                <div class="bg-white rounded px-4">
                  <div class="widget-total-balance">
                    <div class="widget-content">
                      <div class="account-box">
                        <div class="info">
                          <div class="inv-title">
                            <h5>{{ $t("total balance") }}</h5>
                          </div>
                          <div class="inv-balance-info">
                            <p class="inv-balance">$ 41,741.42</p>
                            <span class="inv-stats balance-credited"
                              >+ 2453</span
                            >
                          </div>
                        </div>
                        <div class="acc-action">
                          <div>
                            <a href="javascript:void(0);">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-plus"
                              >
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                            </a>
                            <a href="javascript:void(0);">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-credit-card"
                              >
                                <rect
                                  x="1"
                                  y="4"
                                  width="22"
                                  height="16"
                                  rx="2"
                                  ry="2"
                                ></rect>
                                <line x1="1" y1="10" x2="23" y2="10"></line>
                              </svg>
                            </a>
                          </div>
                          <a >{{ $t("upgrade") }}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Panel>
          <Panel header="Recent Activities">
            <div class="w-full flex justify-between flex-wrap px-8">
              <div
                class="w-full xl:w-1/2 lg:w-[90%] md:w-full sm:w-full h-full mb-4"
              >
                <div class="col-span-12 lg:col-span-6 xl:col-span-4">
                  <div
                    class="widget widget-recent-activity"
                    style="box-shadow: none"
                  >
                    <div class="widget-heading">
                      <h5>{{ $t("recent activities") }}</h5>
                    </div>
                    <div class="widget-content h-[25rem] overflow-scroll">
                      <perfect-scrollbar class="timeline-line">
                        <div class="item-timeline timeline-primary">
                          <div class="badge badge-primary"></div>
                          <div class="t-text">
                            <p><span>Updated</span> Server Logs</p>
                            <span
                              class="badge badge-outline-primary outline-badge-primary icon-fill-primary"
                              >Pending</span
                            >
                            <p class="t-time">Just Now</p>
                          </div>
                        </div>

                        <div class="item-timeline timeline-success">
                          <div class="badge badge-success"></div>
                          <div class="t-text">
                            <p>
                              Send Mail to
                              <a href="javascript:void(0);">HR</a> and
                              <a href="javascript:void(0);">Admin</a>
                            </p>
                            <span
                              class="badge badge-outline-success outline-badge-success icon-fill-success"
                              >Completed</span
                            >
                            <p class="t-time">2 min ago</p>
                          </div>
                        </div>

                        <div class="item-timeline timeline-danger">
                          <div class="badge badge-danger"></div>
                          <div class="t-text">
                            <p>Backup <span>Files EOD</span></p>
                            <span
                              class="badge badge-outline-danger outline-badge-danger icon-fill-danger"
                              >Pending</span
                            >
                            <p class="t-time">14:00</p>
                          </div>
                        </div>

                        <div class="item-timeline timeline-dark">
                          <div class="badge badge-dark"></div>
                          <div class="t-text">
                            <p>
                              Collect documents from
                              <a href="javascript:void(0);">Sara</a>
                            </p>
                            <span
                              class="badge badge-outline-dark outline-badge-dark icon-fill-dark"
                              >Completed</span
                            >
                            <p class="t-time">16:00</p>
                          </div>
                        </div>

                        <div class="item-timeline timeline-warning">
                          <div class="badge badge-warning"></div>
                          <div class="t-text">
                            <p>
                              Conference call with
                              <a href="javascript:void(0);">Marketing Manager</a
                              >.
                            </p>
                            <span
                              class="badge badge-outline-warning outline-badge-warning icon-fill-warning"
                              >In progress</span
                            >
                            <p class="t-time">17:00</p>
                          </div>
                        </div>

                        <div class="item-timeline timeline-secondary">
                          <div class="badge badge-secondary"></div>
                          <div class="t-text">
                            <p>Rebooted Server</p>
                            <span
                              class="badge badge-outline-secondary outline-badge-secondary icon-fill-secondary"
                              >Completed</span
                            >
                            <p class="t-time">17:00</p>
                          </div>
                        </div>

                        <div class="item-timeline timeline-warning">
                          <div class="badge badge-warning"></div>
                          <div class="t-text">
                            <p>Send contract details to Freelancer</p>
                            <span
                              class="badge badge-outline-warning outline-badge-warning icon-fill-warning"
                              >Pending</span
                            >
                            <p class="t-time">18:00</p>
                          </div>
                        </div>

                        <div class="item-timeline timeline-dark">
                          <div class="badge badge-dark"></div>
                          <div class="t-text">
                            <p>
                              Kelly want to increase the time of the project.
                            </p>
                            <span
                              class="badge badge-outline-dark outline-badge-dark icon-fill-dark"
                              >In Progress</span
                            >
                            <p class="t-time">19:00</p>
                          </div>
                        </div>

                        <div class="item-timeline timeline-success">
                          <div class="badge badge-success"></div>
                          <div class="t-text">
                            <p>Server down for maintanence</p>
                            <span
                              class="badge badge-outline-success outline-badge-success icon-fill-success"
                              >Completed</span
                            >
                            <p class="t-time">19:00</p>
                          </div>
                        </div>

                        <div class="item-timeline timeline-secondary">
                          <div class="badge badge-secondary"></div>
                          <div class="t-text">
                            <p>Malicious link detected</p>
                            <span
                              class="badge badge-outline-secondary outline-badge-secondary icon-fill-secondary"
                              >Block</span
                            >
                            <p class="t-time">20:00</p>
                          </div>
                        </div>

                        <div class="item-timeline timeline-warning">
                          <div class="badge badge-warning"></div>
                          <div class="t-text">
                            <p>Rebooted Server</p>
                            <span
                              class="badge badge-outline-warning outline-badge-warning icon-fill-warning"
                              >Completed</span
                            >
                            <p class="t-time">23:00</p>
                          </div>
                        </div>

                        <div class="item-timeline timeline-primary">
                          <div class="badge badge-primary"></div>
                          <div class="t-text">
                            <p><span>Updated</span> Server Logs</p>
                            <span
                              class="badge badge-outline-primary outline-badge-primary icon-fill-primary"
                              >Pending</span
                            >
                            <p class="t-time">Just Now</p>
                          </div>
                        </div>

                        <div class="item-timeline timeline-success">
                          <div class="badge badge-success"></div>
                          <div class="t-text">
                            <p>
                              Send Mail to
                              <a href="javascript:void(0);">HR</a> and
                              <a href="javascript:void(0);">Admin</a>
                            </p>
                            <span
                              class="badge badge-outline-success outline-badge-success icon-fill-success"
                              >Completed</span
                            >
                            <p class="t-time">2 min ago</p>
                          </div>
                        </div>

                        <div class="item-timeline timeline-danger">
                          <div class="badge badge-danger"></div>
                          <div class="t-text">
                            <p>Backup <span>Files EOD</span></p>
                            <span
                              class="badge badge-outline-danger outline-badge-danger icon-fill-danger"
                              >Pending</span
                            >
                            <p class="t-time">14:00</p>
                          </div>
                        </div>

                        <div class="item-timeline timeline-dark">
                          <div class="badge badge-dark"></div>
                          <div class="t-text">
                            <p>
                              Collect documents from
                              <a href="javascript:void(0);">Sara</a>
                            </p>
                            <span
                              class="badge badge-outline-dark outline-badge-dark icon-fill-dark"
                              >Completed</span
                            >
                            <p class="t-time">16:00</p>
                          </div>
                        </div>

                        <div class="item-timeline timeline-warning">
                          <div class="badge badge-warning"></div>
                          <div class="t-text">
                            <p>
                              Conference call with
                              <a href="javascript:void(0);">Marketing Manager</a
                              >.
                            </p>
                            <span
                              class="badge badge-outline-warning outline-badge-warning icon-fill-warning"
                              >In progress</span
                            >
                            <p class="t-time">17:00</p>
                          </div>
                        </div>
                      </perfect-scrollbar>

                      <div class="tm-action-btn">
                        <button type="button" class="btn btn-default">
                          <span>View All</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-arrow-right"
                          >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full xl:w-[50%] lg:w-[90%] mb-4">
                <div class="widget widget-transaction">
                  <div class="widget-heading">
                    <h5>{{ $t("transactions") }}</h5>
                    <div class="task-action"></div>
                  </div>

                  <div class="widget-content">
                    <div
                      class="transactions-list flex items-center justify-between mb-4"
                    >
                      <div class="flex items-center">
                        <span
                          class="b-avatar icon-fill-info mr-2 badge-info rounded-full"
                        >
                          <span class="b-avatar-text"><span>SP</span></span>
                        </span>
                        <div class="t-name">
                          <h4>Shaun Park</h4>
                          <p>10 Jan 1:00PM</p>
                        </div>
                      </div>
                      <div class="text-success">+$36.11</div>
                    </div>

                    <div
                      class="transactions-list flex items-center justify-between mb-4"
                    >
                      <div class="flex items-center">
                        <span
                          class="b-avatar icon-fill-warning mr-2 badge-warning rounded-full"
                        >
                          <span class="b-avatar-custom">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="19"
                              height="19"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-home"
                            >
                              <path
                                d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                              ></path>
                              <polyline
                                points="9 22 9 12 15 12 15 22"
                              ></polyline>
                            </svg>
                          </span>
                        </span>
                        <div class="t-name">
                          <h4>Electricity Bill</h4>
                          <p>04 Jan 1:00PM</p>
                        </div>
                      </div>
                      <div class="text-danger">-$16.44</div>
                    </div>

                    <div
                      class="transactions-list flex items-center justify-between mb-4"
                    >
                      <div class="flex items-center">
                        <span
                          class="b-avatar icon-fill-danger mr-2 badge-danger rounded-full"
                        >
                          <span class="b-avatar-text"><span>AD</span></span>
                        </span>
                        <div class="t-name">
                          <h4>Amy Diaz</h4>
                          <p>31 Jan 1:00PM</p>
                        </div>
                      </div>
                      <div class="text-success">+$66.44</div>
                    </div>

                    <div
                      class="transactions-list flex items-center justify-between mb-4"
                    >
                      <div class="flex items-center">
                        <span
                          class="b-avatar icon-fill-secondary mr-2 badge-secondary rounded-full"
                        >
                          <span class="b-avatar-custom">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="19"
                              height="19"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-home"
                            >
                              <path
                                d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                              ></path>
                              <polyline
                                points="9 22 9 12 15 12 15 22"
                              ></polyline>
                            </svg>
                          </span>
                        </span>
                        <div class="t-name">
                          <h4>Netflix</h4>
                          <p>02 Feb 1:00PM</p>
                        </div>
                      </div>
                      <div class="text-danger">-$32.00</div>
                    </div>

                    <div
                      class="transactions-list flex items-center justify-between mb-4"
                    >
                      <div class="flex items-center">
                        <span
                          class="b-avatar icon-fill-info mr-2 badge-info rounded-full"
                        >
                          <span class="b-avatar-text"><span>DA</span></span>
                        </span>
                        <div class="t-name">
                          <h4>Daisy Anderson</h4>
                          <p>15 Feb 1:00PM</p>
                        </div>
                      </div>
                      <div class="text-success">+$10.08</div>
                    </div>

                    <div
                      class="transactions-list flex items-center justify-between mb-4"
                    >
                      <div class="flex items-center">
                        <span
                          class="b-avatar icon-fill-danger mr-2 badge-danger rounded-full"
                        >
                          <span class="b-avatar-text"><span>OG</span></span>
                        </span>
                        <div class="t-name">
                          <h4>Oscar Garner</h4>
                          <p>20 Feb 1:00PM</p>
                        </div>
                      </div>
                      <div class="text-danger">-$22.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full xl:w-[50%] lg:w-[90%] mb-4">
                <div class="widget widget-summary">
                  <div class="widget-heading">
                    <h5>{{ $t("summary") }}</h5>
                  </div>
                  <div class="widget-content">
                    <div class="summary-list">
                      <div class="w-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-shopping-bag"
                        >
                          <path
                            d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                          ></path>
                          <line x1="3" y1="6" x2="21" y2="6"></line>
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                      </div>
                      <div class="w-summary-details">
                        <div class="w-summary-info">
                          <h6>Income</h6>
                          <p class="summary-count">$92,600</p>
                        </div>
                        <div class="w-summary-stats">
                          <div class="progress h-2 bg-gray-200">
                            <div
                              role="progressbar"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              aria-valuenow="90"
                              class="progress-bar bg-purple-500 h-[0.35rem] rounded-lg from-secondary"
                              style="width: 90%"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="summary-list">
                      <div class="w-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-tag"
                        >
                          <path
                            d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
                          ></path>
                          <line x1="7" y1="7" x2="7" y2="7"></line>
                        </svg>
                      </div>
                      <div class="w-summary-details">
                        <div class="w-summary-info">
                          <h6>Profit</h6>
                          <p class="summary-count">$37,515</p>
                        </div>
                        <div class="w-summary-stats">
                          <div class="progress h-2 bg-gray-200">
                            <div
                              role="progressbar"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              aria-valuenow="65"
                              class="progress-bar bg-green-500 h-[0.35rem] rounded-lg from-secondary"
                              style="width: 65%"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="summary-list">
                      <div class="w-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-credit-card"
                        >
                          <rect
                            x="1"
                            y="4"
                            width="22"
                            height="16"
                            rx="2"
                            ry="2"
                          ></rect>
                          <line x1="1" y1="10" x2="23" y2="10"></line>
                        </svg>
                      </div>
                      <div class="w-summary-details">
                        <div class="w-summary-info">
                          <h6>Expenses</h6>
                          <p class="summary-count">$55,085</p>
                        </div>
                        <div class="w-summary-stats">
                          <div class="progress h-2 bg-gray-200">
                            <div
                              role="progressbar"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              aria-valuenow="80"
                              class="progress-bar bg-yellow-500 h-[0.35rem] rounded-lg from-secondary"
                              style="width: 80%"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Panel>

          <Panel header="AI Generated Interview">
            <div class="w-full"></div>
          </Panel>

          <Panel header="Performance Analytics">
            <div class="xl:col-span-9 lg:w-[90%] px-4 col-span-12 mb-4">
              <div class="bg-white shadow-md rounded p-4">
                <div class="flex justify-between items-center mb-4">
                  <h5 class="text-lg font-medium">{{ $t("unique visitors") }}</h5>
                </div>
                <div class="widget-content">
                  <apexchart
                    v-if="unique_visitor_options"
                    height="350"
                    type="bar"
                    :options="unique_visitor_options"
                    :series="unique_visitor_series"
                  ></apexchart>
                </div>
              </div>
            </div>
          </Panel>

          <Panel header="Personalized Interview">
            <div class="space-y-4 mx-auto flex w-full flex-wrap">
              <div
                class="xl:w-[60%] lg:w-[90%] md:w-full sm:w-full w-full xl:mr-4"
              >
                <div class="widget widget-revenue">
                  <div class="widget-heading">
                    <h5>{{ $t("revenue") }}</h5>
                  </div>

                  <div class="widget-content">
                    <div class="chart-title">
                      Total Profit
                      <span class="text-primary ml-1">$10,840</span>
                    </div>
                    <apexchart
                      v-if="revenue_options"
                      height="325"
                      type="area"
                      :options="revenue_options"
                      :series="revenue_series"
                    ></apexchart>
                  </div>
                </div>
              </div>

              <div class="xl:w-[35%] lg:w-full md:w-full sm:w-full w-full mb-4">
                <div class="bg-white shadow-md rounded p-4">
                  <div class="widget-sales-category">
                    <div class="widget-heading">
                      <h5>{{ $t("sales by category") }}</h5>
                    </div>
                    <div class="widget-content">
                      <apexchart
                        v-if="sales_donut_options"
                        height="460"
                        type="donut"
                        :options="sales_donut_options"
                        :series="sales_donut_series"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import apexchart from "vue3-apexcharts";

export default {
  name: "Dashboard",
  components: {
    apexchart,
  },
  data() {
    return {
      revenue_series: [
        {
          name: "Income",
          data: [
            16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000,
            17000, 14000, 17000,
          ],
        },
        {
          name: "Expenses",
          data: [
            16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000,
            19000, 18000, 19000,
          ],
        },
      ],
      unique_visitor_series: [
        {
          name: "Direct",
          data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63],
        },
        {
          name: "Organic",
          data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70],
        },
      ],
      sales_donut_series: [985, 737, 270],
      total_visit_series: [{ data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25] }],
      paid_visit_series: [{ data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69] }],
    };
  },
  computed: {
    revenue_options() {
      const is_dark = false;
      return {
        chart: {
          fontFamily: "Nunito, sans-serif",
          zoom: { enabled: false },
          toolbar: { show: false },
        },
        dataLabels: { enabled: false },
        stroke: { show: true, curve: "smooth", width: 2, lineCap: "square" },
        dropShadow: {
          enabled: true,
          opacity: 0.2,
          blur: 10,
          left: -7,
          top: 22,
        },
        colors: is_dark ? ["#2196f3", "#e7515a"] : ["#1b55e2", "#e7515a"],
        markers: {
          discrete: [
            {
              seriesIndex: 0,
              dataPointIndex: 6,
              fillColor: "#1b55e2",
              strokeColor: "#fff",
              size: 7,
            },
            {
              seriesIndex: 1,
              dataPointIndex: 5,
              fillColor: "#e7515a",
              strokeColor: "#fff",
              size: 7,
            },
          ],
        },
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        xaxis: {
          axisBorder: { show: false },
          axisTicks: { show: false },
          crosshairs: { show: true },
          labels: {
            offsetX: 0,
            offsetY: 5,
            style: {
              fontSize: "12px",
              fontFamily: "Nunito, sans-serif",
              cssClass: "apexcharts-xaxis-title",
            },
          },
        },
        yaxis: {
          tickAmount: 7,
          labels: {
            formatter: function (value) {
              return value / 1000 + "K";
            },
            offsetX: -10,
            offsetY: 0,
            style: {
              fontSize: "12px",
              fontFamily: "Nunito, sans-serif",
              cssClass: "apexcharts-yaxis-title",
            },
          },
        },
        grid: {
          borderColor: is_dark ? "#191e3a" : "#e0e6ed",
          strokeDashArray: 5,
          xaxis: { lines: { show: true } },
          yaxis: { lines: { show: false } },
          padding: { top: 0, right: 0, bottom: 0, left: 0 },
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          offsetY: 0,
          fontSize: "16px",
          fontFamily: "Nunito, sans-serif",
          markers: {
            width: 10,
            height: 10,
            strokeWidth: 0,
            strokeColor: "#fff",
            fillColors: undefined,
            radius: 12,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0,
          },
          itemMargin: { horizontal: 20, vertical: 5 },
        },
        tooltip: { theme: "dark", marker: { show: true }, x: { show: false } },
        fill: {
          type: "gradient",
          gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: is_dark ? 0.19 : 0.28,
            opacityTo: 0.05,
            stops: is_dark ? [100, 100] : [45, 100],
          },
        },
      };
    },
    unique_visitor_options() {
      const is_dark = false;
      return {
        chart: { toolbar: { show: false } },
        dataLabels: { enabled: false },
        stroke: { show: true, width: 2, colors: ["transparent"] },
        colors: ["#5c1ac3", "#ffbb44"],
        dropShadow: {
          enabled: true,
          opacity: 0.3,
          blur: 1,
          left: 1,
          top: 1,
          color: "#515365",
        },
        plotOptions: {
          bar: { horizontal: false, columnWidth: "55%", borderRadius: 10 },
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center",
          fontSize: "14px",
          markers: { width: 12, height: 12 },
          itemMargin: { horizontal: 0, vertical: 8 },
        },
        grid: { borderColor: is_dark ? "#191e3a" : "#e0e6ed" },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          axisBorder: { show: true, color: is_dark ? "#3b3f5c" : "#e0e6ed" },
        },
        yaxis: {
          tickAmount: 6,
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: is_dark ? "dark" : "light",
            type: "vertical",
            shadeIntensity: 0.3,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100],
          },
        },
        tooltip: {
          theme: is_dark ? "dark" : "light",
          y: {
            formatter: function (val) {
              return val;
            },
          },
        },
      };
    },
    total_visit_options() {
      const is_dark = false;
      return {
        chart: {
          sparkline: { enabled: true },
          dropShadow: {
            enabled: true,
            top: 3,
            left: 1,
            blur: 3,
            color: "#009688",
            opacity: 0.7,
          },
        },
        stroke: { curve: "smooth", width: 2 },
        markers: { size: 0 },
        colors: ["#009688"],
        grid: { padding: { top: 0, bottom: 0, left: 0 } },
        tooltip: {
          theme: is_dark ? "dark" : "light",
          x: { show: false },
          y: {
            title: {
              formatter: function formatter() {
                return "";
              },
            },
          },
        },
        responsive: [
          {
            breakPoint: 576,
            options: {
              chart: { height: 95 },
              grid: { padding: { top: 45, bottom: 0, left: 0 } },
            },
          },
        ],
      };
    },
    paid_visit_options() {
      const is_dark = false;
      return {
        chart: {
          sparkline: { enabled: true },
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 2,
            color: "#e2a03f",
            opacity: 0.7,
          },
        },
        stroke: { curve: "smooth", width: 2 },
        markers: { size: 0 },
        colors: ["#e2a03f"],
        grid: { padding: { top: 0, bottom: 0, left: 0 } },
        tooltip: {
          theme: is_dark ? "dark" : "light",
          x: { show: false },
          y: {
            title: {
              formatter: function formatter() {
                return "";
              },
            },
          },
        },
        responsive: [
          {
            breakPoint: 576,
            options: {
              chart: { height: 95 },
              grid: { padding: { top: 35, bottom: 0, left: 0 } },
            },
          },
        ],
      };
    },
    sales_donut_options() {
      const is_dark = false;
      let option = {
        chart: {},
        dataLabels: { enabled: false },
        expandOnClick: is_dark ? false : true,
        stroke: { show: true, width: 25, colors: is_dark ? "#0e1726" : "#fff" },
        colors: is_dark
          ? ["#5c1ac3", "#e2a03f", "#e7515a", "#e2a03f"]
          : ["#e2a03f", "#5c1ac3", "#e7515a"],
        legend: {
          position: "bottom",
          horizontalAlign: "center",
          fontSize: "14px",
          markers: { width: 10, height: 10 },
          height: 50,
          offsetY: 20,
          itemMargin: { horizontal: 8, vertical: 0 },
        },
        plotOptions: {
          pie: {
            donut: {
              size: "65%",
              background: "transparent",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "29px",
                  fontFamily: "Nunito, sans-serif",
                  offsetY: -10,
                },
                value: {
                  show: true,
                  fontSize: "26px",
                  fontFamily: "Nunito, sans-serif",
                  color: is_dark ? "#bfc9d4" : undefined,
                  offsetY: 16,
                  formatter: function (val) {
                    return val;
                  },
                },
                total: {
                  show: true,
                  label: "Total",
                  color: "#888ea8",
                  fontSize: "29px",
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce(function (a, b) {
                      return a + b;
                    }, 0);
                  },
                },
              },
            },
          },
        },
        labels: ["Apparel", "Sports", "Others"],
      };

      if (is_dark) {
        option["states"] = {
          hover: { filter: { type: "none" } },
          active: { filter: { type: "none" } },
        };
      }

      return option;
    },
    soonestInterview() {
      if (!this.savedInterviews.length) return null;
      return this.savedInterviews.reduce((soonest, current) => {
        return new Date(current.date) < new Date(soonest.date)
          ? current
          : soonest;
      }, this.savedInterviews[0]);
    },
  },
  methods: {
    app() {
      new Vue({
        el: "#appl",
        data: function () {
          return {
            options: {
              chart: {
                id: "vuechart-example",
              },
              xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
              },
            },
            series: [
              {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91],
              },
            ],
          };
        },
      });
    },
    async fetchUserData(userId) {
      const q = query(collection(db, "users", userId, "interviewData"));
      const querySnapshot = await getDocs(q);
      this.interviewData = querySnapshot.docs
        .map((doc) => doc.data())
        .sort((a, b) => b.timestamp.seconds - a.timestamp.seconds);
    },
    async fetchSavedInterviews(userId) {
      const q = query(collection(db, "users", userId, "savedInterviews"));
      const querySnapshot = await getDocs(q);
      this.savedInterviews = querySnapshot.docs.map((doc) => doc.data());
    },
    formatDate(date) {
      const dateObj = new Date(date.seconds ? date.seconds * 1000 : date);
      return dateObj.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    },
    prepareChartData() {
      const dates = this.interviewData.map((data) => {
        const date = new Date(data.timestamp.seconds * 1000);
        return date.toDateString();
      });
      const dateCounts = dates.reduce((acc, date) => {
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {});
      const labels = Object.keys(dateCounts);
      const data = Object.values(dateCounts);
      this.chartData = {
        labels,
        datasets: [
          {
            label: "Questions Answered per Day",
            backgroundColor: "#42A5F5",
            data,
          },
        ],
      };
    },
  },
};
</script>
