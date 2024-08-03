@extends('layouts.admin')

@section('content')

    <div class="row">
        <div class="col-12">
            <div class="card">

                <form action="{{route('admin.municipalities.store')}}" method="post" enctype="multipart/form-data">
                    @csrf
                    @method('post')
                    <div class="card-body">
                        <div>
                            <div class="form-group w-50">
                                <label for="">Заголовок</label>
                                <input class="form-control form-control-lg mb-3" type="text" placeholder="Введите заголовок" name="title">
                            </div>
                            @error('title')
                            <div class="text-danger">{{ $message }}</div>
                            @enderror

                            <div class="form-group w-50">
                                <div class="basic-form">
                                    <form>
                                        <div class="form-row">
                                            <div class="col-7">
                                                <input type="number" class="form-control" placeholder="Насление" name="population" >
                                            </div>
                                            <div class="col">
                                                <input type="text" class="form-control" placeholder="Площадь" name="square">
                                            </div>
                                            <div class="col">
                                                <input type="number" class="form-control" placeholder="Год" name="year">
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            @error('lead')
                            <div class="text-danger">{{ $message }}</div>
                            @enderror

                            <div class="form-group w-50">
                                <label for="summernote">Контент</label>
                                <textarea id="summernote" placeholder="Введите что-нибудь" name="content"></textarea>
                            </div>
                            @error('content')
                            <div class="text-danger">{{ $message }}</div>
                            @enderror

                            <div class="row w-50">
                                <div class="col-12">
                                    <div class="card">
                                        <div class="card-body">

                                            <h4 class="card-title">Изображение на главной</h4>
                                            <input type="file" class="dropify" data-height="300" name="image_main" multiple/>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row w-50">
                                <div class="col-12">
                                    <div class="card">
                                        <div class="card-body">

                                            <h4 class="card-title">Герб</h4>
                                            <input type="file" class="dropify" data-height="300" name="arms" multiple/>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            @error('image_main')
                            <div class="text-danger">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="form-group w-50">
                            <label for="exampleFormControlSelect1">Глава</label>
                            <select class="form-control" id="exampleFormControlSelect1" name="supervisor_id">
                                <option value="">Выберите руководителя</option>
                                @foreach($peoples as $people)
                                    <option value="{{$people->id}}">{{$people->title}}</option>
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

                        <div class="form-group w-50">
                            <label for="exampleFormControlSelect1">Тип</label>
                            <select class="form-control" id="exampleFormControlSelect1" name="type">

                                @foreach($types as $id => $type)
                                    <option value="{{$id}}" >{{ $type}}</option>
                                @endforeach
                            </select>
                        </div>
                        @error('user_id')
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
