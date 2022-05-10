<div class="col-lg-12">
    <div class="card">
        <div class="card-header border-0">
            <div class="d-flex align-items-center">
                <h5 class="card-title mb-0 flex-grow-1">{{ __('Deposit History') }}</h5>
            </div>
        </div>
        <div class="card-body border border-dashed border-end-0 border-start-0">
            <form>
                <div class="row g-3">
                    <div class="col-xxl-4 col-sm-12">
                        <div class="search-box">
                            <input type="text" class="form-control search bg-light border-light" name="find" placeholder="{{ __('Enter transaction ID or card info') }}" value="{{ request('find') }}">
                            <i class="ri-search-line search-icon"></i>
                        </div>
                    </div>

                    <div class="col-xxl-3 col-sm-4">
                        <input type="date" class="form-control bg-light border-light" name="date" value="{{ request('date') }}" placeholder="Chọn ngày">
                    </div>

                    <div class="col-xxl-3 col-sm-4">
                        <div class="input-light">
                            <select class="form-control" name="status">
                                <option value="">{{ __('All') }}</option>
                                <option value="1">{{ __('Success') }}</option>
                                <option value="0">{{ __('Pending') }}</option>
                                <option value="2">{{ __('Failed') }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-xxl-2 col-sm-4">
                        <button type="submit" class="btn btn-primary">
                            <i class="ri-search-2-line me-1 align-bottom"></i>
                            {{ __('Search') }}
                        </button>
                        <a href="{{ route('deposit') }}" class="btn btn-danger">
                            <i class="ri-refresh-line me-1 align-bottom"></i>
                            {{ __('Reset') }}
                        </a>
                    </div>
                </div>
            </form>
        </div>
        <div class="card-body">
            <div class="table-responsive table-card mb-4">
                <table class="table align-middle table-nowrap mb-0" id="tasksTable">
                    <thead class="table-light text-muted">
                    <tr>
                        <td>ID</td>
                        <th>{{ __('Time') }}</th>
                        <th>{{ __('Deposit Type') }}</th>
                        <th>{{ __('Amount') }}</th>
                        <th>{{ __('Amount Received') }}</th>
                        <th>{{ __('Content') }}</th>
                    </tr>
                    </thead>
                    <tbody class="list form-check-all">
                    @foreach($deposits as $deposit)
                        <tr>
                            <td class="id"><a href="apps-tasks-details" class="fw-medium link-primary">#VLZ632</a></td>
                            <td class="project_name"><a href="apps-projects-overview" class="fw-medium link-primary">Velzon - v1.0.0</a></td>
                            <td>
                                <div class="d-flex">
                                    <div class="flex-grow-1 tasks_name">Error message when placing an orders?</div>
                                    <div class="flex-shrink-0 ms-4">
                                        <ul class="list-inline tasks-list-menu mb-0">
                                            <li class="list-inline-item"><a href="apps-tasks-details"><i class="ri-eye-fill align-bottom me-2 text-muted"></i></a></li>
                                            <li class="list-inline-item"><a href="#"><i class="ri-pencil-fill align-bottom me-2 text-muted"></i></a></li>
                                            <li class="list-inline-item">
                                                <a class="remove-item-btn" data-bs-toggle="modal" href="#deleteOrder">
                                                    <i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                            <td class="client_name">Robert McMahon</td>
                            <td class="assignedto">
                                <div class="avatar-group">
                                    <a href="javascript: void(0);" class="avatar-group-item shadow" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Frank">
                                        <img src="{{ URL::asset('assets/images/users/avatar-3.jpg') }}" alt="" class="rounded-circle avatar-xxs" />
                                    </a>
                                    <a href="javascript: void(0);" class="avatar-group-item shadow" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Anna">
                                        <img src="{{ URL::asset('assets/images/users/avatar-1.jpg') }}" alt="" class="rounded-circle avatar-xxs" />
                                    </a>
                                </div>
                            </td>
                            <td class="due_date">25 Jan, 2022</td>
                            <td class="status"><span class="badge badge-soft-secondary text-uppercase">Inprogress</span></td>
                            <td class="priority"><span class="badge bg-danger text-uppercase">High</span></td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
