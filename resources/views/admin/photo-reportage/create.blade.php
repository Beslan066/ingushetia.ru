@extends('layouts.admin')

@section('content')

    <div class="row">
        <div class="col-12">
            <div class="card">

                <form action="{{route('admin.photoReportage.store')}}" method="post" enctype="multipart/form-data" >
                    @csrf
                    @method('post')
                    <div class="card-body">
                        <div>
                            <div class="form-group w-50">
                                <label for="">Заголовок</label>
                                <input class="form-control form-control-lg mb-3" type="text" placeholder="Введите заголовок" name="title">
                            </div>



                            <div class="form-group w-100 d-flex align-items-center">
                                <div class="w-50">
                                    <textarea id="summernote" placeholder="Введите что-нибудь" name="content"></textarea>
                                </div>

                                <div class="w-50 d-flex flex-column align-items-center">
                                    <div class="col-12">
                                        <div class="card">
                                            <div class="card-body">

                                                <h4 class="card-title">Изображение новости</h4>
                                                <input type="file" class="dropify" data-height="300" name="image_main" multiple/>

                                            </div> <!-- end card-body-->
                                        </div> <!-- end card-->
                                    </div> <!-- end col -->

                                    <div class="col-12">
                                        <div class="custom-file">
                                            <input type="file" name="slides[]" multiple style="padding: 10px; border: 1px solid green">
                                            <label for="exampleInputFile">Слайд-шоу фотографий</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row w-50">

                            </div>

                            @error('image_main')
                            <div class="text-danger">{{ $message }}</div>
                            @enderror
                        </div>


                        <div class="form-group w-50">
                            <input type="datetime-local" class="datetime_input" name="published_at" style="color: #495057; width: 250px; border: 1px solid #ced4da; padding: 5px !important; ">
                        </div>
                        @error('published_at')
                        <div class="text-danger">{{ $message }}</div>
                        @enderror

                        <div class="form-group w-50">
                            <label for="exampleFormControlSelect1">Новость для репортажа</label>
                            <select class="form-control" id="exampleFormControlSelect1" name="news_id">
                                <option value="">Выберите новость или оставьте пустой, если у фоторепортажа нет новости</option>
                                @foreach($news as $item)
                                    <option value="{{$item->id}}">{{$item->title}}</option>
                                @endforeach
                            </select>
                        </div>

                        <div class="form-group w-50">
                            <label for="exampleFormControlSelect1">Автор</label>
                            <select class="form-control" id="exampleFormControlSelect1" name="user_id">
                                <option value="{{auth()->user()->id}}">{{auth()->user()->name}}</option>
                            </select>
                        </div>
                        @error('user_id')
                        <div class="text-danger">{{ $message }}</div>
                        @enderror


                        <div class="form-group w-50 mt-2">

                            <select class="form-control" id="exampleFormControlSelect1" name="agency_id">
                                <option value="{{auth()->user()->agency->id}}">{{auth()->user()->agency->name}}</option>
                            </select>
                        </div>

                        @error('agency_id')
                        <div class="text-danger">{{ $message }}</div>
                        @enderror


                        <div class="btn-group">
                            <button class="btn btn-light mr-2">Назад</button>
                            <button type="submit" class="btn btn-primary">Создать</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
@endsection
