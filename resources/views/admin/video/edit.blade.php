@extends('layouts.admin')

@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <form action="{{ route('admin.videos.update', $video->id) }}" method="post" enctype="multipart/form-data" id="upload-form">
                    @csrf
                    @method('patch')
                    <div class="card-body">
                        <!-- Заголовок -->
                        <div class="form-group w-50">
                            <label for="">Заголовок</label>
                            <input class="form-control form-control-lg mb-3" type="text" placeholder="Введите заголовок" name="title" value="{{ old('title', $video->title) }}">
                        </div>
                        @error('title')
                        <div class="text-danger">{{ $message }}</div>
                        @enderror

                        <!-- Короткое описание -->
                        <div class="form-group w-50">
                            <label for="exampleFormControlTextarea1">Короткое описание</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style="height: 101px;" placeholder="Введите лид" name="lead">{{ old('lead', $video->lead) }}</textarea>
                        </div>
                        @error('lead')
                        <div class="text-danger">{{ $message }}</div>
                        @enderror

                        <!-- Текущее видео -->
                        <div class="form-group w-50">
                            <label>Текущее видео</label>
                            @if($video->video)
                                <video width="320" height="240" controls>
                                    <source src="{{ Storage::url($video->video) }}" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            @else
                                <p>Видео отсутствует</p>
                            @endif
                        </div>

                        <!-- Выбор нового видео файла -->
                        <div class="form-group w-50">
                            <label for="videoInput">Выберите новое видео (если необходимо заменить)</label>
                            <input type="file" class="form-control-file" id="videoInput" name="video" accept="video/*">
                        </div>

                        <!-- Прогресс-бар для загрузки видео -->
                        <div class="progress mt-3 w-50" style="height: 25px;">
                            <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
                        </div>

                        @error('video')
                        <div class="text-danger">{{ $message }}</div>
                        @enderror

                        <!-- Текущее изображение -->
                        <div class="form-group w-50">
                            <label>Текущее изображение</label>
                            @if($video->image_main)
                                <img src="{{ Storage::url($video->image_main) }}" class="img-fluid" alt="Текущее изображение">
                            @else
                                <p>Изображение отсутствует</p>
                            @endif
                        </div>

                        <!-- Выбор нового изображения -->
                        <div class="form-group w-50">
                            <label for="imageInput">Выберите новое изображение (если необходимо заменить)</label>
                            <input type="file" class="form-control-file dropify" name="image_main" accept="image/*" data-height="300"/>
                        </div>

                        @error('image_main')
                        <div class="text-danger">{{ $message }}</div>
                        @enderror

                        <!-- Выбор новости для репортажа -->
                        <div class="form-group w-50">
                            <label for="exampleFormControlSelect1">Новость для репортажа</label>
                            <select class="form-control" id="exampleFormControlSelect1" name="news_id">
                                <option value="">Выберите новость или оставьте пустой</option>
                                @foreach($news as $item)
                                    <option value="{{$item->id}}" {{ $item->id == old('news_id', $video->news_id) ? 'selected' : '' }}>{{$item->title}}</option>
                                @endforeach
                            </select>
                        </div>

                        <!-- Дата публикации -->
                        <div class="form-group w-50">
                            <input type="datetime-local" class="datetime_input" name="published_at" style="color: #495057; width: 250px; border: 1px solid #ced4da; padding: 5px !important;"
                                   value="{{ old('published_at', $video->published_at ? $video->published_at->format('Y-m-d\TH:i') : '') }}">
                        </div>

                        @error('published_at')
                        <div class="text-danger">{{ $message }}</div>
                        @enderror

                        <!-- Автор -->
                        <div class="form-group w-50">
                            <label for="exampleFormControlSelect1">Автор</label>
                            <select class="form-control" id="exampleFormControlSelect1" name="user_id">
                                <option value="{{auth()->user()->id}}" {{ auth()->user()->id == old('user_id', $video->user_id) ? 'selected' : '' }}>{{auth()->user()->name}}</option>
                            </select>
                        </div>
                        @error('user_id')
                        <div class="text-danger">{{ $message }}</div>
                        @enderror

                        <!-- Агентство -->
                        <div class="form-group w-50 mt-2">
                            <select class="form-control" id="exampleFormControlSelect1" name="agency_id">
                                <option value="{{auth()->user()->agency->id}}" {{ auth()->user()->agency->id == old('agency_id', $video->agency_id) ? 'selected' : '' }}>{{auth()->user()->agency->name}}</option>
                            </select>
                        </div>
                        @error('agency_id')
                        <div class="text-danger">{{ $message }}</div>
                        @enderror

                        <!-- Кнопки формы -->
                        <div class="btn-group">
                            <a href="{{ route('admin.videos.index') }}" class="btn btn-light mr-2">Назад</a>
                            <button type="submit" class="btn btn-primary">Обновить</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
